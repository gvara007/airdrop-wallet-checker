async function scanWallet(){

let wallet=document.getElementById("wallet").value;

if(wallet.length<10){

document.getElementById("result").innerHTML="Invalid wallet";

return;

}

let url="https://api.etherscan.io/api?module=account&action=txlist&address="+wallet+"&startblock=0&endblock=99999999&page=1&offset=50&sort=desc";

try{

let res=await fetch(url);

let data=await res.json();

let tx=data.result.length;

document.getElementById("result").innerHTML="Transactions detected: "+tx;

let score=0;

if(tx>10) score+=20;
if(tx>50) score+=40;
if(tx>100) score+=80;

document.getElementById("score").innerHTML="Airdrop Score: "+score;

}catch(e){

document.getElementById("result").innerHTML="API error";

}

}
