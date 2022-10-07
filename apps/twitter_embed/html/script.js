const embed_display=document.getElementById('embed_display');

setInterval(() => {
    embed_display.style.height=(window.innerHeight-40)+"px";
    if(window.innerHeight>window.innerWidth){
        embed_display.style.width=(window.innerWidth)+"px";
    }else{
        embed_display.style.width=(window.innerWidth/3)+"px";
    }
}, 1);


const url = new URL(location);
const params = new URLSearchParams(url.search);

for(let param of params){
    console.log(param);
}
window.onload=()=>{

    var embed=[];
    embed[0]=document.createElement('a');
    embed[1]=document.createElement('script');

    if(getParam("name")===""){
        embed_display.hidden=true;
    }else{
        embed[0].innerHTML=`Tweets by ${getParam("name")}`;
        embed[0].href=`https://twitter.com/${getParam("name")}?ref_src=twsrc%5Etfw`;
        embed[0].classList.add("twitter-timeline");
        embed[1].async=true;
        embed[1].charset="utf-8";
        embed[1].src="https://platform.twitter.com/widgets.js";
        embed_display.appendChild(embed[0]);
        embed_display.appendChild(embed[1]);
    }
};

function getParam(name){
    if(params.get(name)!=null){
        return params.get(name);
    }else{
        return "";
    }
}