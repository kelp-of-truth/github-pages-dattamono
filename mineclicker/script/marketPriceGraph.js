/*const mpLine=document.getElementsByClassName('mpLine');
const mpGrap=document.getElementById('mpGraph');

mpLine[0].style.height=300-(10*forBazaars[0].Price)+Number(String(mpLine[0].style.height).replace(/px/g, ""))+"px";


var mpLineClone=[];


setInterval(() => {
    mpLineClone[mpLineClone.length]=mpLine[0].cloneNode(true);
    setTimeout(() => {
        mpGrap.appendChild(mpLineClone[mpLineClone.length-1])      
    }, 1);


    mpLine[mpLine.length-1].style.backgroundColor="black"
    mpLine[0].style.marginTop=300-(10*forBazaars[0].Price)+"px";
    mpLine[0].style.marginLeft=Number(String(mpLine[mpLine.length-1].style.marginLeft).replace(/px/g, ""))+25+"px";
    message("alert", mpLine[2].style.marginLeft, "white", [])
}, 1000);



document.onclick=(e)=>{
    alert(e.target.className)
};*/