var forBazaars=[];

class forBazaar{
    constructor(sellItem, minPrice, maxPrice, type, nowPrice){
        this.sellItem=sellItem;
        this.minPrice=minPrice;
        this.maxPrice=maxPrice;
        this.type=type;
        this.nowPrice=nowPrice;

        forBazaars[forBazaars.length]=this;
    };

    get SellItem(){
        return this.sellItem;
    }
    get MinPrice(){
        return this.minPrice;
    }
    get MaxPrice(){
        return this.maxPrice;
    }
    get Type(){
        return this.type
    }
    get Price(){
        return this.nowPrice;
    } 

    
    set changePrice(value){
        this.nowPrice=value;
    }

}

// 関節費用 初期値20%
var jConst=20;

const b_cobblestone=new forBazaar(cobblestone, 3, 6, 2, 5);
const b_coal=new forBazaar(coal, 5, 8, 2, 1);
const b_iron_ingot=new forBazaar(iron_ingot, 25, 30, 3, 1);
const b_gold_ingot=new forBazaar(gold_ingot, 90, 100, 4, 5);
const b_copper_ingot=new forBazaar(copper_ingot, 13, 15, 2, 1);
const b_diamond=new forBazaar(diamond, 185, 200, 4, 10);
const b_redstone_dust=new forBazaar(redstone_dust, 16, 20, 3, 1);
const b_lapis_lazuli=new forBazaar(lapis_lazuli, 25, 30, 2, 5);
const b_emerald=new forBazaar(emerald, 190, 200, 5, 190);





const marketPrice=document.getElementById('marketPrice');
const mpDivCloneParent=document.getElementById('cloneParent');
const sellItemIcon=document.getElementsByClassName('sellItemIcon');
const prSell=document.getElementsByClassName('sellPrice');
const prBuy=document.getElementsByClassName('buyPrice');
const sellButton=document.getElementsByClassName('sellButton');
const buyButton=document.getElementsByClassName('buyButton');


var mpDivs=[];


for(let i=0;i<forBazaars.length;i++){
    mpDivs[mpDivs.length]=mpDivCloneParent.cloneNode(true);
    marketPrice.appendChild(mpDivs[mpDivs.length-1]);
    mpDivs[mpDivs.length-1].id="b_ele_"+forBazaars[i].SellItem.Id;
    sellItemIcon[sellItemIcon.length-1].src=forBazaars[i].SellItem.ImageURL;

    sellItemIcon[sellItemIcon.length-1].onmouseover=(e)=>{
        toolTip.hidden=false;

        toolTip.innerHTML=forBazaars[i].SellItem.Name;
    };
    sellItemIcon[sellItemIcon.length-1].onmouseout=(e)=>{
        toolTip.hidden=true;
    };
    
    prSell[prSell.length-1].innerHTML=forBazaars[i].Price;
    prBuy[prBuy.length-1].innerHTML=String(forBazaars[i].Price*((jConst+100)/100));

    sellButton[sellButton.length-1].onclick=()=>{
        if(forBazaars[i].SellItem.Count>=1){
            Player.addCoins=forBazaars[i].Price;
            forBazaars[i].SellItem.subCount=1;
        }else{
            message('alert', ("You don't have any "+forBazaars[i].SellItem.Name+"s."), "red", [])
        }
    };
    sellButton[sellButton.length-1].oncontextmenu=()=>{
        if(forBazaars[i].SellItem.Count>=64){
            Player.addCoins=forBazaars[i].Price*64;
            forBazaars[i].SellItem.subCount=64;
        }else
        if(forBazaars[i].SellItem.Count<=0){
            message('alert', ("You don't have sixty-four "+forBazaars[i].SellItem.Name+"s."), "red", [])        }else{
        }
        return false;
    };
    buyButton[buyButton.length-1].onclick=()=>{
        if(Player.Coins >= (forBazaars[i].Price*((jConst+100)/100))){
            Player.subCoins=forBazaars[i].Price*((jConst+100)/100);
            forBazaars[i].SellItem.addCount=1;
        };
    };


    mpDivs[mpDivs.length-1].hidden=false;
    // message("alert", mpDivs[mpDivs.length-1].id, "white", [])
};





// 相場の更新

// 次の相場変更までの時間(ms)
var nextPriceChange=Math.floor(Math.random() * 60000);
if(localStorage.getItem('visited')==null){
for(let i=0;i<forBazaars.length;i++){
    forBazaars[i].changePrice=((Math.floor(Math.random() * (forBazaars[i].MaxPrice-forBazaars[i].MinPrice)*10)+(forBazaars[i].MinPrice)*10)/10);
    /*if(Math.floor(forBazaars[i].Price*0.8) < (forBazaars[i].MaxPrice+forBazaars[i].MinPrice)/2 ){
        forBazaars[i].changePrice=((Math.floor(Math.random() * (forBazaars[i].MaxPrice-forBazaars[i].MinPrice)*10)+(forBazaars[i].MinPrice)*10)/10);;
    }else
    if(Math.floor(forBazaars[i].Price*1.2) > (forBazaars[i].MaxPrice+forBazaars[i].MinPrice)/2 && notChange <= Math.floor(Math.random()*6)){
            forBazaars[i].changePrice=((Math.floor(Math.random() * (forBazaars[i].MaxPrice-forBazaars[i].MinPrice)*10)+(forBazaars[i].MinPrice)*10)/10);;
        message("alert", "a", "white", [])
    }*/
    prSell[i+1].innerHTML=(forBazaars[i].Price).toFixed(1);
    prBuy[i+1].innerHTML=(forBazaars[i].Price*((jConst+100)/100)).toFixed(1);

};
};


setInterval(() => {
    for(let i=0;i<forBazaars.length;i++){
        var notChange=forBazaars[i].Type;
        if(notChange <= Math.floor(Math.random()*6)){
        forBazaars[i].changePrice=((Math.floor(Math.random() * (forBazaars[i].MaxPrice-forBazaars[i].MinPrice)*10)+(forBazaars[i].MinPrice)*10)/10);
        /*if(Math.floor(forBazaars[i].Price*0.8) < (forBazaars[i].MaxPrice+forBazaars[i].MinPrice)/2 ){
            forBazaars[i].changePrice=((Math.floor(Math.random() * (forBazaars[i].MaxPrice-forBazaars[i].MinPrice)*10)+(forBazaars[i].MinPrice)*10)/10);;
        }else
        if(Math.floor(forBazaars[i].Price*1.2) > (forBazaars[i].MaxPrice+forBazaars[i].MinPrice)/2 && notChange <= Math.floor(Math.random()*6)){
                forBazaars[i].changePrice=((Math.floor(Math.random() * (forBazaars[i].MaxPrice-forBazaars[i].MinPrice)*10)+(forBazaars[i].MinPrice)*10)/10);;
            message("alert", "a", "white", [])
        }*/
        prSell[i+1].innerHTML=(forBazaars[i].Price).toFixed(1);
        prBuy[i+1].innerHTML=(forBazaars[i].Price*((jConst+100)/100)).toFixed(1);
        };
    };
    //autoSave()
    nextPriceChange=Math.floor(Math.random() * 60000);
}, nextPriceChange);




setInterval(() => {
    for(let i=0;i<forBazaars.length;i++){
        prSell[i+1].innerHTML=(forBazaars[i].Price).toFixed(1);
        prBuy[i+1].innerHTML=(forBazaars[i].Price*((jConst+100)/100)).toFixed(1);
    };
}, 1);



