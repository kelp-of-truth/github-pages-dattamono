var playerStrage=[];

var storageL=0;

var emptySlot=0;
setInterval(() => {



    /*for(let i=0;i<itemsLength;i++){
        if(itemsDataStrange[i].Count>0){
            storageL++;
        };
    };
    if(storageL>27){
        inventorySize=storageL-storageL%9+9;
    };*/



    playerStrage="";
    playerStrage=[];

    for(let i=0;i<itemsLength;i++){
        /*emptyCheck(0);
        function emptyCheck(n){
            if(playerStrage[n]==undefined){
                emptySlot=n;
                if(itemsDataStrange[i].Count>=1){
                    playerStrage[emptySlot]=itemsDataStrange[i];
                };

            }else{
                n++;
                emptyCheck(n);
            }
            
        };*/


        if(itemsDataStrange[i].Count>0){
            playerStrage[i]=itemsDataStrange[i];
        };
        if(itemsDataStrange[i].Count<=0){
            playerStrage[i]=" ";
        };


    };

}, 1);



var inventorySize=27;
inventorySize=itemsLength-itemsLength%9+9;

var inventoryTile=[];
var inventoryItemCount=[];
for(let i=0;i<inventorySize;i++){
    inventoryTile[inventoryTile.length]=document.createElement('img');
    inventoryItemCount[inventoryItemCount.length]=document.createElement('label');

    var thisIC=inventoryItemCount[inventoryItemCount.length-1];

    var thisIT=inventoryTile[inventoryTile.length-1];

    thisIT.classList.add("inventoryTile");
    thisIC.classList.add("inventoryItemCount")
    thisIC.innerHTML=" ";
    thisIT.src=".//img/textures/empty.webp";
    thisIT.style.left=((inventoryTile.length-1)%9)*54+"px";
    thisIT.style.bottom=((inventorySize-9)/9)*54-(Math.floor((inventoryTile.length-1)/9)*54)+"px";

    thisIC.style.left=((inventoryItemCount.length-1)%9)*54+48/*-window.innerWidth/2+486*/+"px";
    thisIC.style.bottom=((inventorySize-9)/9)*54-(Math.floor((inventoryItemCount.length-1)/9)*54)+"px";



    inventory.appendChild(thisIT);
    inventory.appendChild(thisIC);
};

// インベントリのいち調整
inventory.style.bottom=String(inventory.style.bottom).replace(/px/g, "")-(inventorySize/9-3)*54+"px";



/*inventory.onmousewheel=(e)=>{
    var WheelDl=e.wheelDelta;



    if(WheelDl<0){
        invSc(1);
    }else
    if(WheelDl>0){
        invSc(-1);
    };
};




var invHidden=[];

for(let i=0;i<inventorySize;i++){
    invHidden[i]=0;
};

for(let i=0;i<inventorySize-27;i++){
    invHidden[inventorySize-i-1]=1;
};

function invSc(scrollN){
    for(let i=0;i<9*scrollN;i++){
        
    };
};*/


const viewItem=document.getElementById('viewItem')

setInterval(() => {
    // アイテムの描画
    for(let i=0;i<playerStrage.length;i++){
        if(playerStrage[i]!=" "){
            inventoryTile[i].src=playerStrage[i].ImageURL;
            inventoryItemCount[i].innerHTML=playerStrage[i].Count;
            inventoryItemCount[i].style.marginLeft=(inventoryItemCount[i].innerHTML.length*12)*-1+"px";
            if(inventoryItemCount[i].innerHTML[0]=="0"){
                inventoryItemCount[i].innerHTML[0]="";
            };
        }else{
            inventoryTile[i].src=".//img/hiddenImg.webp";
            inventoryItemCount[i].innerHTML=" ";
        }
    };

    if(viewItemData!=undefined)
{    if(viewItemData.Count<=0){
        viewItem.src=".//";
        viewItemData=undefined;
    };}


    inventory.style.height=inventorySize/9*54+"px";

}, 1);


// for(let i=0;i<itemsLength;i++){
//     if(itemsDataStrange[i].Count<=0){
//         storageL++;
//     };
//     if(storageL==9){
//         for(let j=0;j<9;j){
//         inventoryTile[inventoryTile.length-1-j].hidden==true;
//     };};
// };














const itemFrame=document.getElementById('itemframe');
const itemDeleteButton=document.getElementById('itemDelete');
const itemUseButton=document.getElementById('itemUse');

function openInv(){
    if(inventory.hidden==true){
        inventory.hidden=false;
        itemFrame.hidden=false;

    }else
    if(inventory.hidden==false){
        inventory.hidden=true;
        itemFrame.hidden=true;
    };
};






var viewItemData;

// アイテムのツールチップ
for(let i=0;i<itemsLength;i++){
    inventoryTile[i].onmouseover=(e)=>{
        if(itemsDataStrange[i].Count>0){
            toolTip.hidden=false;

            toolTip.innerHTML=itemsDataStrange[i].Name;


            if (itemsDataStrange[i].Rarity == "common") {
                toolTip.innerHTML += "<br><span style='color: gray;font-weight: bold;'>COMMON</span>";
            } else
            if (itemsDataStrange[i].Rarity == "uncommon") {
                toolTip.innerHTML += "<br><span style='color: green;font-weight: bold;'>UNCOMMON</span>";
            } else
            if (itemsDataStrange[i].Rarity == "rare") {
                toolTip.innerHTML += "<br><span style='color: blue;font-weight: bold;'>RARE</span>";
            } else
            if (itemsDataStrange[i].Rarity == "epic") {
                toolTip.innerHTML += "<br><span style='color: purple;font-weight: bold;'>EPIC</span>";
            } else
            if (itemsDataStrange[i].Rarity == "legendary") {
                toolTip.innerHTML += "<br><span style='color: orange;font-weight: bold;'>LEGENDARY</span>";
            };


            toolTip.innerHTML+="<br><br>"+itemsDataStrange[i].ItemType;

        };
    };

    inventoryTile[i].onmouseout=(e)=>{
        toolTip.hidden=true;
    };



    inventoryTile[i].onclick=(e)=>{
        if(itemsDataStrange[i].Count>0){
            viewItemData=itemsDataStrange[i];
            viewItem.src=itemsDataStrange[i].ImageURL;
        };
    };
};
const delNum=document.getElementById('deleteNum');
const delDiv=document.getElementById('deleteDiv');
const delDone=document.getElementById('deleteDone');
const delCancel=document.getElementById('deleteCnacel');


itemDeleteButton.onclick=(e)=>{
    if(viewItemData.getData[1]==true){
        delNum.max=viewItemData.Count;
        delDiv.hidden=false;
        delDiv.style.top=e.pageY-100+"px";
        delDiv.style.left=e.pageX+"px";
    };
};

delDone.onclick=()=>{
    if(delNum.value<=viewItemData.Count && delNum.value>0)
{    viewItemData.subCount=delNum.value;
    delDiv.hidden=true;
    delNum.value=1;}
};
delCancel.onclick=()=>{
    delDiv.hidden=true;
    delNum.value=1;
};