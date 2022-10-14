const music=new Audio("./audio.mp3");
const AudioDiv=document.getElementById('audio-div');
const audioRange=document.getElementById('audio-range');
const current=document.getElementById('current');
const playBtn=document.getElementById('play-btn');
const loopBtn=document.getElementById('loop-btn')
const menuBtn=document.getElementById('menu-btn');
const menuItems=document.getElementById('items');

playBtn.onclick=()=>{
    playAudio();
};
loopBtn.onclick=()=>{
    loopAudio();
};





function playAudio(){
    if(playing===true){
        playBtn.innerHTML='<span class="material-symbols-rounded">play_arrow</span>';
        music.pause();
        
    }else
    if(playing===false){
        playBtn.innerHTML='<span class="material-symbols-rounded">pause</span>';
        music.play();
    };
}
function loopAudio(){ 
    if(music.loop===false){
        music.loop=true;
        loopBtn.style.color="rgb(30, 255, 135)"
    }else
    if(music.loop===true){
        music.loop=false;
        loopBtn.style.color="white"
    };
}
function backAudio(){
    music.currentTime=0;
}
function nextAudio(){
    music.currentTime=music.duration;
}


window.onload=()=>{
    setInterval(() => {
        current.innerHTML=`${tohms(music.duration)} / ${tohms(music.currentTime)}`
    }, 1);
}
var step;
music.onplay=()=>{
    playBtn.innerHTML='<span class="material-symbols-rounded">pause</span>';
    step=100/music.duration;
    playing=true;
    setInterval(() => {
        if(mousedown===false){
            audioRange.value=music.currentTime*step;
            current.innerHTML=`${tohms(music.duration)} / ${tohms(music.currentTime)}`
        };
    }, 1);
}
music.onpause=()=>{
        playBtn.innerHTML='<span class="material-symbols-rounded">play_arrow</span>';
        playing=false;
}




function tohms(timeSec){
    timeSec = timeSec || 0
    const hh = ("00"+ ~~(timeSec / 3600)).slice(-2)
    const mm = ("00"+ ~~(~~(timeSec / 60) % 60)).slice(-2)
    const ss = ("00"+ ~~(timeSec % 60)).slice(-2)
    return hh +":"+ mm +":"+ ss;
}



var mousedown=false;
var playing=false;
var replay=false;
audioRange.onmousedown=()=>{
    mousedown=true;
    if(playing===true){
        replay=true;
        music.pause();
    }else
    if(playing===false){
        replay=false;
    }
}
audioRange.onmouseup=()=>{
    mousedown=false;
    music.currentTime=audioRange.value/step;
    if(replay===true){
        music.play();
    };
}

audioRange.addEventListener("touchstart", ()=>{
    mousedown=true;
    if(playing===true){
        replay=true;
        music.pause();
    }else
    if(playing===false){
        replay=false;
    }
})

audioRange.addEventListener("touchend", ()=>{
    mousedown=false;
    music.currentTime=audioRange.value/step;
    if(replay===true){
        music.play();
    };
})





menuBtn.onclick=()=>{
    if(window.getComputedStyle(menuItems).height==="0px"){
        menuBtn.style.transform="rotate(0turn)";
        menuItems.style.height="144px";
        menuItems.style.opacity="1";
        menuItems.style.borderBottom="2px solid white";
        setTimeout(() => {
        menuItems.style.borderBottom="unset";
        }, 500); 
    }else
    if(window.getComputedStyle(menuItems).height==="144px"){
        menuBtn.style.transform="rotate(0.5turn)";
        menuItems.style.height="0px";
        menuItems.style.opacity="0.5";
        menuItems.style.borderBottom="2px solid white";
        setTimeout(() => {
        menuItems.style.borderBottom="unset";
        }, 500); 
    }
}






