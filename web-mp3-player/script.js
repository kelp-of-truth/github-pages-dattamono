// Service worker
window.addEventListener("load", function () {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
});
  
var audio_title=[];
var audio_src=[];
var musics=[];



const audio_file = document.getElementById("audioFile");
audio_file.onchange = () => {
  const reader = new FileReader();
  reader.readAsDataURL(audio_file.files[0]);
  reader.onload = () => {
      audio_src[audio_src.length]=reader.result;
      audio_title[audio_title.length]=audio_file.files[0].name;
      musics[musics.length]=new Audio();
      musics[musics.length-1].src=audio_src[audio_src.length-1];
      musics[musics.length-1].play();
      document.title=String(audio_title[audio_title.length-1]).replace(/.mp3/g,"");
  };
};



var selected_menu=0;




window.onload=()=>{
    check_menu();
}




$("#play-msc").on("click",()=>{
    selected_menu=0;
    check_menu();
})
$("#library").on("click",()=>{
    selected_menu=1;
    check_menu();
})
$("#settings").on("click",()=>{
    selected_menu=2;
    check_menu();
})
function check_menu(){
    $(".menu-icon").removeClass("selected_menu");
    $(".menu-icon").removeClass("settings_rotate");
    if(selected_menu===0){
        $("#play-msc").addClass("selected_menu");
    }
    if(selected_menu===1){
        $("#library").addClass("selected_menu");
    }
    if(selected_menu===2){
        $("#settings").addClass("selected_menu");
        $("#settings").addClass("settings_rotate");
    }
}
