for(idx of document.getElementByClassName("colorModel")){
    idx.innerHTML=(`<span class="colorBox" style="background-color:${idx.innerHTML};"></span>`)+(`<span style="margin-left:1em">${idx.innerHTML}</span>`)
}
