$("#input").on("click", ()=>{
    $("#output").attr("src", ("https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url="+$("#inputPath").val()+"&size="+$("#inputSize").val()));
    $("#srcPath").attr("value", $("#output").attr("src"));
})
$("#getPath").on("click", ()=>{
    $("#srcPath").select();
    document.execCommand("copy");
})
setInterval(() => {
    $("#srcPath").attr("value", $("#output").attr("src"));
}, 10);

