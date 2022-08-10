var disabelKeyEvents=0;

document.addEventListener("keydown", (e)=>{
    var downKey=e.keyCode;
    var keyRepeat=e.repeat;

    document.oninput=(e)=>{
        disabelKeyEvents=1;
    };
    document.onchange=(e)=>{
        disabelKeyEvents=1;
    };
    
    setTimeout(() => {
        if(disabelKeyEvents==0){

            if(downKey==27 && keyRepeat!=true){
                esc();
            };
    
            if(downKey==69 && keyRepeat!=true && chatBox.hidden==true){
                openInv();
            };
    
            if(downKey==13 && keyRepeat!=true && endedAni==1){
                openChat();
            }
    
            if(e.key=="r" && e.ctrlKey==true && keyRepeat!=true){
                localStorage.removeItem("visited");
            };

        };
    }, 1);



    disabelKeyEvents=0;

});