function copyed(e){
    document.getElementById("copyed").classList.add("copyed");



    document.getElementById("copyed").style.top=`${e.getBoundingClientRect().top-5-document.getElementById("copyed").clientHeight}px`;
    document.getElementById("copyed").style.left=`${e.getBoundingClientRect().left+e.clientWidth+5-document.getElementById("copyed").clientWidth}px`
}
document.getElementById("copyed").onanimationend=()=>{
    document.getElementById("copyed").classList.remove("copyed");
}



// banner images
/**
 * Lush Caves : https://github.com/kelp-of-truth/minecraft-views/blob/main/2023-02-22_20.56.27.png?raw=true
 * End City : https://github.com/kelp-of-truth/minecraft-views/blob/main/2023-02-22_20.39.46.png?raw=true
 * The End : https://github.com/kelp-of-truth/minecraft-views/blob/main/2023-02-23_18.15.20.png?raw=true
 */
window.onload=()=>{
    const bannerNum=Math.floor(Math.random()*3)
    if(bannerNum===0){
        document.getElementsByClassName("banner")[0].style.backgroundImage="url('https://github.com/kelp-of-truth/minecraft-views/blob/main/2023-02-22_20.56.27.png?raw=true')"
    }
    if(bannerNum===1){
        document.getElementsByClassName("banner")[0].style.backgroundImage="url('https://github.com/kelp-of-truth/minecraft-views/blob/main/2023-02-22_20.39.46.png?raw=true')"
    }
    if(bannerNum===2){
        document.getElementsByClassName("banner")[0].style.backgroundImage="url('https://github.com/kelp-of-truth/minecraft-views/blob/main/2023-02-23_18.15.20.png?raw=true')"
    }
}