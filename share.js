share_icon();


function share_icon(){
    let i=0;
    for(idx of document.getElementsByClassName("material-icons")){
        if(idx.innerHTML==="share"){
            const tooltip=document.createElement("div");
            tooltip.classList.add("mdl-tooltip");
            tooltip.innerHTML="Share";
            tooltip.setAttribute("data-mdl-for", `mdl-btn_${i}`);
            idx.parentElement.id=`mdl-btn_${i}`;
            idx.parentElement.appendChild(tooltip);
            idx.parentElement.onclick=(e)=>{
                navigator.share({
                    url:`${e.target.parentElement.parentElement.parentElement.getElementsByClassName("mdl-card__actions mdl-card--border")[0].querySelectorAll("a")[0].href}`
                })
            }
        }
        i++;
    }
}