$("#searchBox").on("change", ()=>{
    $("#searching").attr("hidden", false);
    setTimeout(() => {
        
    for(let i=1;i<document.getElementById('mainTable').querySelectorAll("tr").length;i++){
        if(String((document.getElementById('mainTable').querySelectorAll("tr")[i].querySelectorAll("td")[1].innerHTML).slice(0, (document.getElementById('searchBox').value).length)).indexOf($("#searchBox").val(), 0)<0){
            document.getElementById('mainTable').querySelectorAll("tr")[i].hidden=true;
        }else{  
        document.getElementById('mainTable').querySelectorAll("tr")[i].hidden=false;
        };
        if(i==document.getElementById('mainTable').querySelectorAll("tr").length-1){
            $("#searching").attr("hidden", true);
        }
    };
}, 10);

});
// console.log(document.getElementById('mainTable').querySelectorAll("tr")[i].querySelectorAll("td")[1].innerHTML)

