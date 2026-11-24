let fs=require("fs")
let gcr=require("./mgcr.js")
let wlg=0
let fnum="01165197734";
let pass="Tulinair12."
let con=1
let idtok=""
let dom="amoi66b.com"
let mid="60880";
let game="fruitRipe"
//if(process.argv.length>2)wlg=parseInt(process.argv[2])
//if(process.argv.length>5)con=parseInt(process.argv[5])
//if(process.argv.length>3)fnum=process.argv[3]
if(process.argv.length>2)idtok=process.argv[2]
let url="https://"+dom+"/api/v1/index.php"
let hh={
"content-type":"application/x-www-form-urlencoded; charset=UTF-8"

}
let gametit="AFBSLOT2"
let wid=1
let blogin="mobile="+fnum+"&password="+pass+"&module=%2Fusers%2Flogin&merchantId="+mid+"&accessId=&accessToken=&walletIsAdmin="
let btok1="ajaxAsync=1&site="+gametit+"&type=SLOT&product=&game="+game+"&lang=MS&mobile=1&ios=0&returnURL=https%3A%2F%2F"+dom+"%2FgameList%2F"+gametit+"%2FSLOT%2F0%2F0&callback=1&demo=&walletId="+wid+"&module=%2Fusers%2FgetGameURL&merchantId="+mid+"&accessId="
let btok2="&accessToken="
let btok3="&walletIsAdmin="
let hgame= {
  "Host": "api.vv2026.net",
  "Connection": "keep-alive",
  "sec-ch-ua": "\"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
  "sec-ch-ua-mobile": "?1",
  "sec-ch-ua-platform": "\"Android\"",
  "Upgrade-Insecure-Requests": "1",
  "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "Sec-Fetch-Site": "cross-site",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-User": "?1",
  "Sec-Fetch-Dest": "document",
  "Referer": "https://"+dom+"/",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "en-MY,en;q=0.9,zh-MY;q=0.8,zh;q=0.7,ms-MY;q=0.6,ms;q=0.5,en-GB;q=0.4,en-US;q=0.3",
  "dnt":1,
  "X-Requested-With":"mark.via.gp"
};
let h222={
  "Host": dom,
  "Connection": "keep-alive",
  "Content-Length": "340",
  "sec-ch-ua-platform": "\"Android\"",
  "User-Agent": "Mozilla/5.0 (Linux; Android 14; CPH2387 Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.91 Mobile Safari/537.36",
  "Accept": "*/*",
  "sec-ch-ua": "\"Android WebView\";v=\"149\", \"Chromium\";v=\"149\", \"Not)A;Brand\";v=\"24\"",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "sec-ch-ua-mobile": "?1",
  "Origin": "https://"+dom,
  "X-Requested-With": "mark.via.gp",
  "Sec-Fetch-Site": "same-origin",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Dest": "empty",
  "Referer": "https://"+dom+"/gameList/AFBSLOT2/SLOT/0/0",
  "Accept-Encoding": "gzip, deflate, br, zstd"
};
async function reptok(sid,tok){
  let fp="./mmtcr.js";
  try{
    let d=fs.readFileSync(fp, "utf-8")
    let nd=d.replace(/session-.*?"/g,sid+"\"")
    nd=nd.replace(/afb-.*?"/g,tok+"\"")
    console.log(nd)
    fs.writeFileSync(fp,nd,"utf-8")
    console.log("file updated success")
  }catch(e){
    console.log("file uodated failed")
    console.error(e)
  }
}

function gogame(durl){
  fetch(durl,{headers:hgame,redirect:"manual"})
  .then(r=>{
   let l=r.headers.get("location")
   console.log(r.redirected)
   console.log(r.headers)
   console.log(r.status)
   console.log(l)
/*   let fstr=l.match(/.*sid=(.*?)&.*token=(.*?)&/)
   let sid=fstr[1]
   let stok=fstr[2]
   console.log(sid + ":"+stok)
   reptok(sid,stok)*/
   return r.text()
  })
.then(r=>{
  console.log(r)
  let fstr=r.match(/.*sid=(.*?)&.*token=(.*?)&/)
   let sid=fstr[1]
   let stok=fstr[2]
   console.log(sid + ":"+stok)
   reptok(sid,stok)
})

}

function gettok(id,tok){
  let bb=btok1+id+btok2+tok+btok3
  const h22 = {
  "Host": "magnum918.vip",
  "Connection": "keep-alive",
  "Content-Length": bb.length.toString(),
  "sec-ch-ua-platform": "\"Android\"",
  "User-Agent": "Mozilla/5.0 (Linux; Android 14; CPH2387 Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.91 Mobile Safari/537.36",
  "Accept": "*/*",
  "sec-ch-ua": "\"Android WebView\";v=\"149\", \"Chromium\";v=\"149\", \"Not)A;Brand\";v=\"24\"",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "sec-ch-ua-mobile": "?1",
  "Origin": "https://magnum918.vip",
  "X-Requested-With": "mark.via.gp",
  "Sec-Fetch-Site": "same-origin",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Dest": "empty",
  "Referer": "https://magnum918.vip/gameList/AFBSLOT2/SLOT/0/0",
  "Accept-Encoding": "gzip, deflate, br, zstd"
};
  fetch(url,{headers:h22,body:bb,method:"POST"})
  .then(r=>r.json())
  .then(r=>{
   console.log(r)
   let durl=r.data.url
   console.log(durl)
   gogame(durl)
  
  })
}
function lgin(){
  fetch(url,{headers:hh,body:blogin,method:"POST"})
  .then(r=>r.json())
  .then(r=>{
       console.log(r)
       console.log(r.data.token)
       console.log(r.data.id)
       try{
         let fp="./mgcr.js";
         let d=fs.readFileSync(fp,"utf-8")
         d=d.replace(/id\s*:\s*".*?"/,"id: \""+r.data.id+"\"");
         d=d.replace(/tok\s*:\s*".*?"/,"tok: \""+r.data.token+"\"");
         fs.writeFileSync(fp,d,"utf-8")
         console.log("success gcr")
       }catch(e){
         console.log("fail gcr "+e)
      }
       if(con)gettok(r.data.id,r.data.token)
   })
}

//if(wlg)lgin()
let itarr=idtok.split("+")
console.log(itarr)
gettok(itarr[0],itarr[1])
