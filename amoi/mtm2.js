let mtcr=require("./mmtcr.js")
let fs=require("fs")
let tgit=require("./tgit6.js")
const WebSocket = require('ws');
const keepAlive = setInterval(() => {}, 2147483647);
let aa=21;
let bb=20003;
let interr=false
let bbet="0.02"
let bind=0
let mend=1388
let lbet=5
let lbl=-1
let slog=0
if(process.argv.length>2)bind=parseInt(process.argv[2])
if(process.argv.length>3)mend=parseInt(process.argv[3])
if(process.argv.length>4)lbl=parseInt(process.argv[4])
if(process.argv.length>5)slog=parseInt(process.argv[5])
let barr=["0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","1.00"]
let bbarr=["0.30","0.75","1.50","3.00","7.50","15.00","30.00","75.00","150.00","300.00"]
//if(process.argv.length>2)interr=true
//if(process.argv.length>2)aa=process.argv[2]
//if(process.argv.length>3)bb=process.argv[3];
bbet=barr[bind]
bbet=0.04+(bind/100)
tgit.setup(0,bbet,mend,lbl)
console.log("BET "+(bbet*lbet))
let d={"mainCmd":21,"subCmd":4,"buffer":null,"data":{"bet":bbet,"line":lbet,"extra":{"isFreeBonus":false,"promotionCode":""},"promotionCode":""}}
let di={"mainCmd":51,"subCmd":2,"buffer":null,"data":{"sessionID":"session-5I7S0S7YU1GY","token":"afb-5I7S0Q03IY9E","version":"1.0.1","extra":{"promotionCode":""},"promotionCode":""}}
di={"mainCmd":51,"subCmd":2,"buffer":null,"data":{"sessionID":"session-5I840W1PYM0I","token":"afb-5I840SQABO4Y","version":"1.0.1","extra":{"promotionCode":""},"promotionCode":""}}
di=mtcr.di;
let d1={"mainCmd":1,"subCmd":102,"buffer":null,"data":{"extra":{"promotionCode":""},"promotionCode":""}}
let d21_11={"mainCmd":21,"subCmd":11,"buffer":null,"data":{"method":"bonus","extra":{"promotionCode":""},"promotionCode":""}}
let dg={"mainCmd":aa,"subCmd":bb,"buffer":null,"data":{"extra":{"promotionCode":""},"promotionCode":""}}
// 1. Initialize connection with custom headers
let dg2={"mainCmd":aa,"subCmd":10011,"buffer":null,"data":{"extra":{"promotionCode":""},"promotionCode":""}}
let df={"mainCmd":21,"subCmd":22,"buffer":null,"data":{"bet":bbet,"line":lbet,"extra":{"promotionCode":""},"promotionCode":""}}
d={"mainCmd":21,"subCmd":4,"buffer":null,"data":{"bet":bbet,"line":lbet,"extra":{"isFreeBonus":false,"promotionCode":""},"promotionCode":""}}

di=mtcr.di;
 d1={"mainCmd":1,"subCmd":102,"buffer":null,"data":{"extra":{"promotionCode":""},"promotionCode":""}}
d21_11={"mainCmd":21,"subCmd":11,"buffer":null,"data":{"method":"bonus","extra":{"promotionCode":""},"promotionCode":""}}
dg={"mainCmd":aa,"subCmd":bb,"buffer":null,"data":{"extra":{"promotionCode":""},"promotionCode":""}}
// 1. Initialize connection with custom headers
df={"mainCmd":21,"subCmd":10,"buffer":null,"data":{"bet":bbet,"line":lbet,"extra":{"promotionCode":""},"promotionCode":""}}

let terr=false
let ti=0;
let tia=[d,df,d1,dg,d21_11];
tia=[d,df,dg,d21_11];
let lti=tia.length
let ws=null
let foc=null
function ocf(oc){
 if(slog==0)return
 if(oc)foc=fs.openSync("foc.txt","w")
 else fs.closeSync()
 
}

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

let upt="";
function uptw(stt){
  upt+=stt;
}
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

function cws(){
ws=null;
let wsurl=""
ws = new WebSocket('wss://www.vip68b.uk/lgs/websocket/connection/fruitRipe', {
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
//@  console.log('Connected to server');
  
  
  // 3. Send a message once the connection is open
  const message = JSON.stringify({ type: 'greet', text: 'Hello Server!' });
  ws.send(JSON.stringify(di));
});

// 4. Listen for incoming messages
ws.on('message', async function incoming(data) {
//  console.log('Received from server:');
  //@console.log(ti);
  terr=false
  try{
  console.log("in try")
   //@console.log(JSON.parse(data));
//  console.log("after parse")
  let jd=JSON.parse(data)
  if(jd.data.balance){
   let stt=" WIN "+jd.data.slotWin.win+" | BALANCE " +jd.data.balance+" | BET "+(bbet*lbet)+" "
   //uptow(stt)
   let sa="\x1b[31m\x1b[47m\x1b[1m"
   let sb="\x1b[0m"
   console.log(sa+stt+sb)
   if(jd.data.slotWin.win!="0")console.log("\x1b[31m\x1b[43m\x1b[1m WIN "+jd.data.slotWin.win+"\x1b[0m \n")
   if(slog==1)fs.writeSync(foc,stt+"\n")
   if(parseInt(jd.data.balance)>=mend){
   console.log("DONE REACH")
   return;
}
  if(parseInt(jd.data.balance)<=lbl){
   console.log("DROPPING")
   return
  }
}
  if(ti==2||(jd.data.code&&jd.data.code==2000)){
  // console.log("terr true")
   terr=true
   
   ti=(ti+1)%lti

  
  
   }  

  }catch{
  console.log("in catch")
//@  console.log(data.toString());

//  if(ti==2)ti=(ti+1)%lti
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
cws()
}

})
// 5. Handle errors
ws.on('error', e=>{
 console.error("error");
 console.error(e)
});
}
let gi=setInterval(()=>{
    if (tgit.done) {
      clearInterval(gi)
      if (tgit.VAL==1)cws=cws
      else cws=tgit.cws
      cws()
    }
}, 100)
