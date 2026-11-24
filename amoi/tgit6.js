const {spawnSync}=require("child_process")
//let gcr=require("./token.js")
let mtcr=require("./mmtcr.js")
let fs=require("fs")
let gcr=require("./mgcr.js")
//let dom="ultra66.vip";
let utoken=gcr.tok
let uid=gcr.id
// let dom="abangspin2.com"
// let mid="10970"
const WebSocket = require('ws');

const keepAlive = setInterval(() => {}, 2147483647);
let aa=21;
let bb=20003;
let interr=false
let bbet="0.02"
let bind=0
let mend=1388
let lbet="fruit"
let lbl=-1
let slog=0
//if(process.argv.length>2)bind=parseInt(process.argv[2])
//if(process.argv.length>3)mend=parseInt(process.argv[3])
//if(process.argv.length>4)lbl=parseInt(process.argv[4])
//if(process.argv.length>5)slog=parseInt(process.argv[5])
let g="fruitRipe"
let barr=["0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","1.00"]
let bbarr=["0.30","0.75","1.50","3.00","7.50","15.00","30.00","75.00","150.00","300.00"]
//if(process.argv.length>2)interr=true
//if(process.argv.length>2)aa=process.argv[2]
//if(process.argv.length>3)bb=process.argv[3];
//bbet=barr[bind]
//bbet=0.005+(bind/100)
let car={
bbet:2.0+(bind/1000),	
lbet:lbet,
mend:1388,
lbl:-10,
fbet:0.04+(bind/100)
}
//let g="fruitRipe"
//console.log("BET "+(car.bbet*car.lbet))
let d={"mainCmd":21,"subCmd":4,"buffer":null,"data":{"bet":car.bbet,"line":car.lbet,"extra":{"isFreeBonus":false,"promotionCode":""},"promotionCode":""}}
let di={"mainCmd":51,"subCmd":2,"buffer":null,"data":{"sessionID":"session-5I7S0S7YU1GY","token":"afb-5I7S0Q03IY9E","version":"1.0.1","extra":{"promotionCode":""},"promotionCode":""}}
di={"mainCmd":51,"subCmd":2,"buffer":null,"data":{"sessionID":"session-5I840W1PYM0I","token":"afb-5I840SQABO4Y","version":"1.0.1","extra":{"promotionCode":""},"promotionCode":""}}
di=mtcr.di;
let d1={"mainCmd":1,"subCmd":102,"buffer":null,"data":{"extra":{"promotionCode":""},"promotionCode":""}}
let d21_11={"mainCmd":21,"subCmd":11,"buffer":null,"data":{"method":"bonus","extra":{"promotionCode":""},"promotionCode":""}}
let dg={"mainCmd":aa,"subCmd":bb,"buffer":null,"data":{"extra":{"promotionCode":""},"promotionCode":""}}
// 1. Initialize connection with custom headers
g="f"
let dg2={"mainCmd":aa,"subCmd":10011,"buffer":null,"data":{"extra":{"promotionCode":""},"promotionCode":""}}
let df={"mainCmd":21,"subCmd":10,"buffer":null,"data":{"bet":car.bbet,"line":car.lbet,"extra":{"promotionCode":""},"promotionCode":""}};g+="re"
let terr=false
let ti=0;
let tia=[d,df,dg,d21_11];
let lti=tia.length;g+="nzy"
let ws=null
let foc=null
function ocf(oc){
 if(slog==0)return
 if(oc)foc=fs.openSync("foc.txt","w")
 else fs.closeSync()
 
}
g+="77";
process.on("SIGTERM",  () => {
    console.log("sigterm")
//    foc.closeSync()
   ocf(false)
    process.exit(0)
});

process.on("SIGINT",  () => {
    console.log("sigkill")
//    foc.closeSync()
    ocf(false)
    process.exit(0)
});
process.on("uncaughtException",  (err) => {
    console.log("error : "+err)
//    foc.closeSync()
    ocf(false)
    process.exit(0)
});

let upt="";g+="7";
function uptw(stt){
  upt+=stt;
}
g="fruitRipe"
async function wtoc(){
   if(upt!=""){
   let tt=upt
   upt=""
   await foc.write(tt)
   }
   //wtoc()
}
ocf(true)

//wtoc()
module.exports={
done:false,
VAL:0,
setup:function(ig,aa,bb,cc){
//        console.log(aa)
	car.bbet=0.04+(parseInt(aa)/100);car.bbet="run";
	 car.mend=bb
	car.lbl=cc;
        car.fbet=0.04+(aa/100)
//        console.log("real bey :"+(car.bbet*car.lbet))
   d={"mainCmd":21,"subCmd":4,"buffer":null,"data":{"bet":car.bbet,"line":car.lbet,"extra":{"isFreeBonus":false,"promotionCode":""},"promotionCode":""}};
   df={"mainCmd":21,"subCmd":10,"buffer":null,"data":{"bet":car.bbet,"line":car.lbet,"extra":{"promotionCode":""},"promotionCode":""}};
   tia=[d,d21_11,df,dg]
//let di={"mainCmd":51,"subCmd":2,"buffer":null,"data":{"sessionID":"session-5I7S0S7YU1GY>
//di={"mainCmd":51,"subCmd":2,"buffer":null,"data":{"sessionID":"session-5I840W1PYM0I","t>
//di=mtcr.di;
//d1={"mainCmd":1,"subCmd":102,"buffer":null,"data":{"extra":{"promotionCode":""},"pr>
//d21_11={"mainCmd":21,"subCmd":11,"buffer":null,"data":{"method":"bonus","extra":{"p>
//dg={"mainCmd":aa,"subCmd":bb,"buffer":null,"data":{"extra":{"promotionCode":""},"pr>
// 1. Initialize connection with custom headers
//dg2={"mainCmd":aa,"subCmd":10011,"buffer":null,"data":{"extra":{"promotionCode":""}>
//df={"mainCmd":21,"subCmd":22,"buffer":null,"data":{"bet":car.bbet,"line":car.lbet,">
        let wobj=null
	let url="https://pastebin.com/raw/Xs4NSdtr"
	
  //url="https://raw.githubusercontent.com/Ezanwann/rand/refs/heads/main/st"
       // let url0="https://pastebin.com/raw/3jMkAj88"
        let r0=0;
        let vval=0
        fetch(url)
	.then(r=>r.json())
	.then(r=>{
                //console.log(r)
	 vval=parseInt(r.sp)
// 		return  fetch("https://"+dom+"/api/v1/index.php", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Not=A?Brand\";v=\"99\", \"Google Chrome\";v=\"151\", \"Chromium\";v=\"151\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     //"cookie": "_fbp=fb.1.1785772310020.138006070297610933",
//     "Referer": "https://"+dom
//   },
//   "body": "module=%2Fusers%2FsyncData&merchantId"+mid+"=&accessId="+uid+"&accessToken="+utoken+"&walletIsAdmin=",
//   "method": "POST"
// })
// })
// .then(r=>r.json())
// .then(r=>{
//      console.log(r)
//   //  console.log(r.data.wallet)
//                 let wobj=JSON.parse(r.data.wallet[1].data)
                
                if(vval!=0&&vval!=1)this.VAL=0
                else this.VAL=vval
                //if(wobj.maxWithdraw!=20&&wobj.maxWithdraw!=5)this.VAL=0
//                console.log("VAL "+this.VAL)
                this.done=true
		})
},
cws: 
function (){
//console.log("called from tgit")
ws=null;
let wsurl=""
ws = new WebSocket('wss://www.vip68b.uk/lgs/websocket/connection/'+g, {
  headers: {
     "accept-language": "en-MY,en;q=0.9,zh-MY;q=0.8,zh;q=0.7,ms-MY;q=0.6,ms;q=0.5,en-GB;q=0.4,en-US;q=0.3",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-websocket-extensions": "permessage-deflate; client_max_window_bits",
//    "sec-websocket-key": "6Oy/H5/6qJZqytDno8z9gA==",
    "sec-websocket-key": "SnUwqXmHQIciOD+TKRfb4A==",
    "sec-websocket-version": "13"
  }
});
//console.log(ws)
function wtf(d,w){
    
}
// 2. Event listener for successful connection
ws.on('open', function open() {
  console.log('Connected to server');
  
  
  // 3. Send a message once the connection is open
  const message = JSON.stringify({ type: 'greet', text: 'Hello Server!' });
  ws.send(JSON.stringify(di));
});

// 4. Listen for incoming messages
ws.on('message', async function incoming(data) {
//  console.log('Received from server:');
  console.log(ti);
  terr=false
  try{
  console.log("in try")
 //@ console.log(JSON.parse(data));
//  console.log("after parse")
  let jd=JSON.parse(data)
  if(jd.data.balance){
   let stt=" WIN "+jd.data.slotWin.win+" | BALANCE " +jd.data.balance+" | BET "+(car.fbet*5)+" "
   //uptow(stt)
   let sa="\x1b[31m\x1b[47m\x1b[1m"
   let sb="\x1b[0m"
   console.log(sa+stt+sb)
   if(jd.data.slotWin.win!="0")console.log("\x1b[31m\x1b[43m\x1b[1m WIN "+jd.data.slotWin.win+"\x1b[0m \n")
   if(slog==1)fs.writeSync(foc,stt+"\n")
   if(parseInt(jd.data.balance)>=car.mend){
   console.log("DONE REACH")
   return;
}
  if(parseInt(jd.data.balance)<=car.lbl){
   console.log("DROPPING")
   return
  }
}
  if((ti==2)||(jd.data.code&&jd.data.code==2000)){
  // console.log("terr true")
   terr=true
   
   ti=(ti+1)%lti

  
  
   }  

  }catch{
  console.log("in catch")
//@  console.log(data.toString());

  //if(ti==2)ti=(ti+1)%lti
  ws.send(JSON.stringify(tia[ti]))
//  console.log("sent in catch")
  }

  console.log("done all")
  ws.send(JSON.stringify(tia[ti]));
});
ws.on("close",e=>{

console.log("closed")
if(terr){
terr=false
//console.log("terr truee")
//setTimeout(cws,1000)
module.exports.cws()
}

})
// 5. Handle errors
ws.on('error', e=>{
 console.error("error");
 console.error(e)
});
}

}
