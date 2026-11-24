const { spawn } = require("child_process");
let https=require("https")
let os=require("os")
let child;
let lastLogTime;
let bbet=0
let gi=null
let mend=1888
let lbl=-1
let slog=0
if(process.argv.length>2)bbet=process.argv[2]
if(process.argv.length>3)mend=process.argv[3]
if(process.argv.length>4)lbl=process.argv[4]	
if(process.argv.length>5)slog=process.argv[5]
function start() {
    child = spawn("node", ["mtm2.js",bbet,mend,lbl,slog]);

    lastLogTime = Date.now();

    child.stdout.on("data", data => {
        process.stdout.write(data);
        lastLogTime = Date.now();
        let ds=data.toString()
        if (ds.includes("DONE REACH")||ds.includes("DROPPING")){
           console.log("WATCH DONE");
           child.kill("SIGTERM");
           clearInterval(gi)
           process.exit(0)
        }

    });

    child.stderr.on("data", data => {
        process.stderr.write(data);
        lastLogTime = Date.now();
        /*let ds=data.toString()
        if (ds.includes("DONE REACH")){
           console.log("WATCH DONE");
           child.kill("SIGTERM");
           clearInterval(gi)
           process.exit(0)
        }*/
    });

    child.on("exit", code => {
        console.log("Worker exited (${code}), restarting...");
        setTimeout(start, 1000);
    });
}

function showip(){
 let ni=os.networkInterfaces()
 console.log(ni)
// console.log(ni["eth0"][0]["address"])
 https.get("https://api.ipify.org",r=>{
    let d=""
    r.on("data",c=>{
     d+=c
    })
    r.on("end",()=>console.log("ip is "+d))
 }).on("error",e=>console.log("error ip "+e))
}
showip()

setTimeout(start,1200)

gi=setInterval(() => {
    const idleMs = Date.now() - lastLogTime;

    if (idleMs > 4_500) { // 1 minute no output
        console.log("No logs for 1 minute, killing worker...");
        child.kill("SIGKILL");

        // child.on("exit") will restart it
    }
}, 800);
