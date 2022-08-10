var canenchantLength=0;

var canenchantItemNum=[];

for(let i=0;i<itemsLength;i++){
    if(itemsDataStrange[i].ItemType=="pickaxe" || itemsDataStrange[i].ItemType=="weapon"){
        canenchantLength++;
        canenchantItemNum[canenchantItemNum.length]=i;
    };
};

// canenchantLength=(9-canenchantLength%9)+canenchantLength;


const enchantInv=document.getElementById('enchantInv');
const enchantItemTileImg=document.getElementById('enchatItemTileImg');

var selectEnchantItem="";

var enchantInvTile=[];

for(let i=0;i<canenchantLength;i++){
    enchantInvTile[enchantInvTile.length]=document.createElement('img');
    var thisEIT=enchantInvTile[enchantInvTile.length-1];

    thisEIT.classList.add("inventoryTile");
    thisEIT.src=/*itemsDataStrange[canenchantItemNum[i]].ImageURL*/".//img/textures/empty.webp";

    thisEIT.style.left=(i%9)*54+"px";
    thisEIT.style.top=((i-i%9)/9)*54+"px";

    thisEIT.onclick=(e)=>{
        enchantItemTileImg.src=e.target.src;
        selectEnchantItem=itemsDataStrange[canenchantItemNum[i]];
    };

    thisEIT.onmouseover=()=>{
        if(itemsDataStrange[canenchantItemNum[i]].Count>0){
            toolTip.hidden=false;




            toolTip.innerHTML=itemsDataStrange[canenchantItemNum[i]].Name;


            if (itemsDataStrange[canenchantItemNum[i]].Rarity == "common") {
                toolTip.innerHTML += "<br><span style='color: gray;font-weight: bold;'>COMMON</span>";
            } else
            if (itemsDataStrange[canenchantItemNum[i]].Rarity == "uncommon") {
                toolTip.innerHTML += "<br><span style='color: green;font-weight: bold;'>UNCOMMON</span>";
            } else
            if (itemsDataStrange[canenchantItemNum[i]].Rarity == "rare") {
                toolTip.innerHTML += "<br><span style='color: blue;font-weight: bold;'>RARE</span>";
            } else
            if (itemsDataStrange[canenchantItemNum[i]].Rarity == "epic") {
                toolTip.innerHTML += "<br><span style='color: purple;font-weight: bold;'>EPIC</span>";
            } else
            if (itemsDataStrange[canenchantItemNum[i]].Rarity == "legendary") {
                toolTip.innerHTML += "<br><span style='color: orange;font-weight: bold;'>LEGENDARY</span>";
            };


            toolTip.innerHTML+="<br><br>"+itemsDataStrange[i].ItemType;



        };

    };

    thisEIT.onmouseout=()=>{
        toolTip.hidden=true;
    };

    enchantInv.appendChild(thisEIT);

};


setInterval(() => {
    
    for(let i=0;i<enchantInvTile.length;i++){
        if(itemsDataStrange[canenchantItemNum[i]].Count>0){   
            enchantInvTile[i].src=itemsDataStrange[canenchantItemNum[i]].ImageURL;
        }else
        if(itemsDataStrange[canenchantItemNum[i]].Count<=0){
            enchantInvTile[i].src=".//img/textures/empty.webp";
        }
        // message("alert", "hoge", "white", [])
    };

    if(selectEnchantItem.Count <= 0){
        enchantItemTileImg.src=".//img/textures/empty.webp"
    }else
    if(selectEnchantItem.Count>0){
        enchantItemTileImg.src=selectEnchantItem.ImageURL;
    };
}, 1);



const enchantButton=document.getElementById('enchantButton');

var enchantRequireCoins=1000;

enchantButton.onmouseover=()=>{
    toolTip.hidden=false;

    toolTip.innerHTML="Enchanting with "+(enchantRequireCoins+"Coins").fontcolor("yellow")
};
enchantButton.onmouseout=()=>{
    toolTip.hidden=true;
};
enchantItemTileImg.onmouseover=()=>{
    toolTip.hidden=false;

    toolTip.innerHTML=selectEnchantItem.Name;
};
enchantItemTileImg.onmouseout=()=>{
    toolTip.hidden=true;
};

setTimeout(() => {
    iron_ingot.setCount=64;
    iron_pickaxe.setCount=0;
    stone_pickaxe.setCount=1;
}, 100);
