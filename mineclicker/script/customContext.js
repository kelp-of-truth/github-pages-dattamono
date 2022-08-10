var contextButtons=[];

const customContext=document.getElementById('customContext');


document.oncontextmenu=()=>{
    return false;
};

// closeContext.onclick=()=>{
//     removeContext();
// };



// const closeContext=document.createElement('button');
// closeContext.innerHTML="Close";

document.getElementById('visibleArea').onmousedown=()=>{
    removeContext();
};

function createContext(buttons, e){

    customContext.style.top=e.pageY+"px";
    customContext.style.left=e.pageX+"px";

    customContext.hidden=false;

    for(let i=0;i<buttons.length;i++){
        contextButtons[i]=document.createElement('button');
        contextButtons[i].innerHTML=String(buttons[i]);
        customContext.appendChild(contextButtons[i]);
        customContext.appendChild(document.createElement('br'));
    };

    // customContext.appendChild(closeContext);

};

function removeContext(){

     customContext.remove(true)

    // alert(customContext.children.length)


    //customContext.remove();






};



chatBox.oncontextmenu=(e)=>{
    createContext(["Clear all messages", "Clear this message", "Copy this message"], e);
};
