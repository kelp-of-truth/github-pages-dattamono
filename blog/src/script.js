$("aside").css("height", `calc(${$("main").height()}px + 1rem)`);
$(".blog-pos").val(location.href);
var submitted = false;
$("img").on("click", (e)=>{
    $("#black-bg").attr("hidden", false);
    $("#viewer-image").attr("src", e.target.src);
    $("#viewer-image").attr("hidden", false);
});
$("#black-bg").on("click", ()=>{
    $("#black-bg").attr("hidden", true);
    $("#viewer-image").attr("hidden", true);
});
document.onkeydown=(e)=>{
    if(e.key==="Escape"){
        $("#black-bg").attr("hidden", true);
        $("#viewer-image").attr("hidden", true);
    };
}



window.addEventListener("load", ()=>{
    if(window.innerWidth<=600){
        $("aside").css("display", "none");
        $("main").css("width", "calc(100vw - 64px)");
        $(".header-nav").css("padding-left", "0px");
        $(".header-nav").css("width", "100vw");
        $("main").css("margin-left", "32px");
        $(".blog-pos").css("padding-left", "32px");
    }else{
        $("aside").css("display", "block");
        $("main").css("width", "calc(100% - 264px)");
        $(".header-nav").css("padding-left", "64px");
        $(".header-nav").css("width", "calc(100vw - 64px)");
        $("main").css("margin-left", "64px");
        $(".blog-pos").css("padding-left", "64px");
    };
})
window.addEventListener("resize", ()=>{
    if(window.innerWidth<=600){
        $("aside").css("display", "none");
        $("main").css("width", "calc(100vw - 64px)");
        $(".header-nav").css("padding-left", "0px");
        $(".header-nav").css("width", "100vw");
        $("main").css("margin-left", "32px");
        $(".blog-pos").css("padding-left", "32px");
    }else{
        $("aside").css("display", "block");
        $("main").css("width", "calc(100% - 264px)");
        $(".header-nav").css("padding-left", "64px");
        $(".header-nav").css("width", "calc(100vw - 64px)");
        $("main").css("margin-left", "64px");
        $(".blog-pos").css("padding-left", "64px");
    };
})