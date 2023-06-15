for(idx of document.querySelectorAll("code")){ if(!isNaN(parseInt(String(idx.innerHTML).replace(/#/g,""), 10))||idx.classList.contains("colorModel")){
    idx.classList.add("colorModel");
    idx.innerHTML=(`<span class="colorBox" style="background-color: ${idx.innerHTML};"></span>`)+(`<span style="margin-left: 1em">${idx.innerHTML}</span>`)
  }
}
