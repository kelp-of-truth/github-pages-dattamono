$("#searchBox").on("focus", ()=>{
    $("#formInput").css("borderRadius", "0.7em")
    $("#history").attr("hidden", false);
})
$("#searchBox").on("blur", ()=>{
    setTimeout(() => {
        $("#formInput").css("borderRadius", "calc(1em + 6px)")
        $("#history").attr("hidden", true)  
    }, 1);
})
$(".historyList").on("mousedown", (e)=>{
    $("#searchBox").attr("value", (e.target.querySelectorAll("span")[0].innerHTML));
    setTimeout(() => {
        $("#searchBox").focus();
        document.getElementById('searchBox').setSelectionRange($("#searchBox").attr("length"), $("#searchBox").attr("length"))
    }, 5);
})
$(".historyList").on("mouseup", (e)=>{
    $("#searchSubmit").click();
})



const suggest=new XMLHttpRequest();

suggest.open("GET", "https://www.google.com/complete/search?hl=en&q=google&output=toolbar", true);
suggest.responseType="xml";
suggest.send(null);

suggest.onreadystatechange= function() {
    setTimeout(() => {
        alert(suggest.responseXML);
    }, 100);
};