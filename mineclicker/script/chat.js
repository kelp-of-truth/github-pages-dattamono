const chatBox=document.getElementById('chatBox');



var messageLabel=[];
var messageFrom=[];

function message(mFrom, mText, mColor, mDef){
    messageLabel[messageLabel.length]=document.createElement('span');

    messageFrom[messageFrom.length]=document.createElement('span');

    var thisMF=messageFrom[messageFrom.length-1];
    var thisML=messageLabel[messageLabel.length-1];

    thisMF.innerHTML=String("[ "+mFrom+" ]"+" : ");
    thisMF.style.color="white";
    thisMF.style.userSelect="none";

    mText=String(mText).replace(/</g, "&lt;");
    mText=String(mText).replace(/>/g, "&gt;");
    thisML.innerHTML=String(mText);
    thisML.innerHTML=String(mText)
    thisML.style.color=String(mColor);

    chatBox.appendChild(thisMF);
    chatBox.appendChild(thisML);

    thisML.scrollIntoView();

    // 改行
    chatBox.appendChild(document.createElement('br'));


    if(mDef[0]=="mouseover"){
        thisML.onmouseover=(e)=>{
            eval(mDef[1]);
        };
    }
    if(mDef[0]=="click"){
        thisML.onclick=(e)=>{
            eval(mDef[1]);
        };
    }
    if(mDef[0]=="all"){
        thisML.onmouseover=(e)=>{
            eval(mDef[1]);
        };
        thisML.onclick=(e)=>{
            eval(mDef[2]);
        };
    }


};
document.scroll


var endedAni=1;
function openChat(){
    endedAni=0;
    if(chatBox.hidden==true){
        chatBox.hidden=false;
        playerChatInputs.hidden=false;
        playerChatText.focus();
        setTimeout(() => {
            chatBox.style.height="calc(100% - 3em)";
            chatBox.style.opacity="1";
            playerChatInputs.style.opacity="1";  
            setTimeout(() => {
                endedAni=1;
            }, 500);
        }, 1);

        if(inventory.hidden==false){
            openInv();
        };
    }else
    if(chatBox.hidden==false){
        chatBox.style.height="0%";
        chatBox.style.opacity="0.5";
        playerChatInputs.style.opacity="0.5";


        setTimeout(() => {
            chatBox.hidden=true;
            playerChatInputs.hidden=true;
            endedAni=1;         
        }, 500);

    };
};





const playerChatInputs=document.getElementById('chatInputs');

const playerChatText=document.getElementById('playerChat');
const playerChatColor=document.getElementById('playerChatColor');


playerChatText.onchange=(e)=>{
    message(Player.Name, playerChatText.value, playerChatColor.value, []);
    playerChatText.value="";
};

playerChatColor.onchange=()=>{
    playerChatText.style.color=playerChatColor.value;
};