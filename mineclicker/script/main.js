// バックグラウンド実行
onmessage = function(e) {
    for (var i = e.data, j = 10; i < j; i++) {
        postMessage(i);
    };
};
9













document.addEventListener("click", (e) => {
    if (e.isTrusted) {
        return true;
        alert('a')
    } else {
        return false;
        alert('b')
    }
});






// オートセーブ(10秒に1回)
setInterval(() => {
    autoSave();
}, 10000);



















// tooltip
const toolTip = document.getElementById('toolTip');







const leftArea = document.getElementById('leftArea');
const rightArea = document.getElementById('rightArea');
const bigStone = document.getElementById('bigStone');

const inventroyOre = document.getElementById('inventoryOre');




const Esc = document.getElementById('esc');
const grayBack = document.getElementById('grayback');

// escape
function esc() {
    if (Esc.hidden == true) {
        Esc.hidden = false;
        grayBack.hidden = false;
    } else
    if (Esc.hidden == false) {
        Esc.hidden = true;
        grayBack.hidden = true;

    };

}


const EscContinue = document.getElementById('continue');
const EscExit = document.getElementById('exit');
const escSettings = document.getElementById('settings');


const settingsDiv = document.getElementById('settingsDiv');

EscContinue.onclick = () => {
    esc();
};
EscExit.onclick = () => {
    window.close();
};
escSettings.onclick = () => {
    settingsDiv.hidden = false;
};




// 読み込み



disabelKeyEvents = 1;
window.onload = () => {
    leftArea.hidden = false;
    rightArea.hidden = false;

    loadDef();

};











class clicker {
    constructor(name, maxHealth, health, imageURL, requires) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.health = health;
        this.imageURL = imageURL;
        this.requires = requires;
    };

    get Name() {
        return this.name;
    }
    get MaxHealth() {
        return this.maxHealth;
    }
    get Health() {
        return this.health;
    }
    get ImageURL() {
        return this.imageURL;
    }
    get Requires() {
        return this.requires;
    }

    set setName(value) {
        this.name = value;
    }
    set setMaxHealth(value) {
        this.maxHealth = value;
    }
    set AddHealth(value) {
        this.health += value;
    }
    set SubHealth(value) {
        this.health -= value;
    }
    set setImageURL(value) {
        this.imageURL = value;
    }
    resetHealth() {
        this.health = this.maxHealth;
    }
};













// コイン
const coinLabel = document.getElementById('coincountLabel');

setInterval(() => {
    coinLabel.innerHTML = String(Number(Player.Coins).toFixed(1));
}, 1);







// メイン

//採掘パワー
var pickaxePower = 430;
var ma = 10;
var miningLevel = 1;

var oreLife = 0;
const oreLifeLabel = document.getElementById('oreLife');


underGround = new clicker("under ground", 50, 50, ".//img/bigStone.png", 1);

var biome = "";

biome = "underGround";
8
setInterval(() => {
    if (eval(biome + ".Health") < 0) {
        oreLifeLabel.innerHTML = "0/" + eval(biome + ".MaxHealth");
    } else {
        eval("oreLifeLabel.innerHTML=" + biome + ".Health+'/'+" + biome + ".MaxHealth;");
    };
}, 1);



bigStone.onclick = (e) => {

    if (eval(biome + ".Requires") <= miningLevel && e.isTrusted) {

        if (eval(biome + ".Health") > 0) {
            eval(biome + ".SubHealth=Math.floor((pickaxePower-400)/10)*ma;");

            if (eval(biome + ".Health") <= 0) {

                eval(biome + ".resetHealth()");

                chooseOre();

                function chooseOre() {



                    // 500の中から抽選
                    var randomOre = Math.floor(Math.random() * 501) + 1;

                    if (randomOre > pickaxePower) {
                        chooseOre();
                    } else

                    /*
                    確率
                    cobbleStone:400 1
                    coal:30 1~15
                    iron:15 1~8
                    gold:8 1~8
                    copper:20 4~30
                    diamond:3 1~6
                    redstone:9 3~30
                    lapis:10 3~30
                    emerald:2 1~2
                    netherite:3 1~4
    
    
                    */

                    if (randomOre >= 1 && randomOre <= 400) {
                        getOre(cobblestone, e);
                    } else
                    if (randomOre >= 401 && randomOre <= 430) {
                        getOre(coal, e);
                    } else
                    if (randomOre >= 431 && randomOre <= 445) {
                        if (coal.Count < 5) {
                            chooseOre();
                        } else {
                            getOre(iron_ingot, e);
                            coal.subCount = 5;
                        };
                    } else
                    if (randomOre >= 446 && randomOre <= 453) {
                        if (coal.Count < 5) {
                            chooseOre();
                        } else {
                            getOre(gold_ingot, e);
                            coal.subCount = 5;
                        };
                    } else
                    if (randomOre >= 454 && randomOre <= 473) {
                        if (coal.Count < 5) {
                            chooseOre();
                        } else {
                            getOre(copper_ingot, e);
                            coal.subCount = 5;
                        };
                    } else
                    if (randomOre >= 474 && randomOre <= 476) {
                        getOre(diamond, e);
                    } else
                    if (randomOre >= 477 && randomOre <= 485) {
                        getOre(redstone_dust, e);
                    } else
                    if (randomOre >= 486 && randomOre <= 495) {
                        getOre(lapis_lazuli, e);
                    } else
                    if (randomOre >= 496 && randomOre <= 497) {
                        getOre(emerald, e);
                    } else
                    if (randomOre >= 498 && randomOre <= 501) {
                        getOre(netherite_ingot, e);
                    };

                };
            }

        };

    } else {
        window.close();


    }


};



var oreMinCounts = [
    1, 1, 1, 1, 4, 1, 9, 3, 2, 3
];
var oreMaxCounts = [
    1, 15, 8, 8, 30, 6, 30, 30, 2, 4
];

function getOreNum(s) {
    if (s == cobblestone) {
        return 0;
    } else
    if (s == coal) {
        return 1;
    } else
    if (s == iron_ingot) {
        return 2;
    } else
    if (s == gold_ingot) {
        return 3;
    } else
    if (s == copper_ingot) {
        return 4;
    } else
    if (s == diamond) {
        return 5;
    } else
    if (s == redstone_dust) {
        return 6;
    } else
    if (s == lapis_lazuli) {
        return 7;
    } else
    if (s == emerald) {
        return 8;
    } else
    if (s == netherite_ingot) {
        return 9;
    };
}

// var getEffect = [];
var clickEffect = [];

function getOre(oreID, e) {
    var randomOreCount = Math.floor(Math.random() * (oreMaxCounts[getOreNum(oreID)]) - (oreMinCounts[getOreNum(oreID)]) + 1 + (oreMinCounts[getOreNum(oreID)]));

    // getEffect[getEffect.length] = document.createElement('label');
    // getEffect[getEffect.length - 1].classList.add('getEffect');

    clickEffect[clickEffect.length] = document.createElement('img');
    clickEffect[clickEffect.length - 1].classList.add('clickEffect');

    //var thisGE = getEffect[getEffect.length - 1];
    var thisCE = clickEffect[clickEffect.length - 1]

    /*    if (oreID.Name == "cobble stone") {

            thisGE.innerHTML = "+" + randomOreCount;
            thisGE.style.top = "3rem";


        } else
        if (oreID.Name == "coal") {

            thisGE.innerHTML = "+" + randomOreCount;
            thisGE.style.top = "5rem";

        } else
        if (oreID.Name == "iron ingote") {

            thisGE.innerHTML = "+" + randomOreCount;
            thisGE.style.top = "7rem";

        }
        if (oreID.Name == "gold ingot") {

            thisGE.innerHTML = "+" + randomOreCount;
            thisGE.style.top = "9rem";

        } else
        if (oreID.Name == "copper ingot") {
            thisGE.innerHTML = "+" + randomOreCount;

            thisGE.style.top = "11rem";



        } else
        if (oreID.Name == "diamond") {

            thisGE.innerHTML = "+" + randomOreCount;
            thisGE.style.top = "13rem";

        } else
        if (oreID.Name == "redstone dust") {

            thisGE.innerHTML = "+" + randomOreCount;
            thisGE.style.top = "15rem";

        } else
        if (oreID.Name == "lapis lazuli") {

            thisGE.innerHTML = "+" + randomOreCount;
            thisGE.style.top = "17rem";

        } else
        if (oreID.Name == "emerald") {

            thisGE.innerHTML = "+" + randomOreCount;
            thisGE.style.top = "19rem";

        } else
        if (oreID.Name == "netherite") {

            thisGE.innerHTML = "+" + randomOreCount;
            thisGE.style.top = "21rem";

        };*/



    oreID.addCount = randomOreCount;




    thisCE.src = oreID.ImageURL;
    thisCE.style.left = e.pageX + "px";
    thisCE.style.top = e.pageY + "px";

    // leftArea.appendChild(getEffect[getEffect.length - 1]);
    leftArea.appendChild(clickEffect[clickEffect.length - 1]);

    setTimeout(() => {
        thisCE.style.top = String(thisCE.style.top).replace(/px/g, "") - 150 + "px";
        thisCE.style.marginLeft = Math.floor(Math.random() * 41) - 20 + "px";
    }, 1);


    /*setTimeout(() => {
        thisGE.remove();
    }, 50);*/

    setTimeout(() => {
        // thisCE.remove();


        thisCE.style.opacity = "0.2";
        thisCE.style.zIndex = 0;
        thisCE.style.marginLeft = Math.floor(Math.random() * 101) - 50 + "px"
        thisCE.style.transitionTimingFunction = "ease-in";
        thisCE.style.top = window.innerHeight - 40 + "px";
        setTimeout(() => {
            thisCE.style.zIndex = 1;
            thisCE.style.transitionTimingFunction = "ease-out";
            thisCE.remove();
        }, 800);

    }, 800)

}



// setInterval(() => {
// for (let i = 0; i < clickEffect.length; i++) {
//     var randomPos = Math.floor(Math.random() * 51);
//     clickEffect[i].style.top = String(clickEffect[i].style.top).replace(/px/g, "") - 100 + "px";
// };
// }, 1);



/*setInterval(() => {
    inventroyOre.children[0].children[1].innerHTML = cobblestone.Count;
    inventroyOre.children[1].children[1].innerHTML = coal.Count;
    inventroyOre.children[2].children[1].innerHTML = iron_ingot.Count;
    inventroyOre.children[3].children[1].innerHTML = gold_ingot.Count;
    inventroyOre.children[4].children[1].innerHTML = copper_ingot.Count;
    inventroyOre.children[5].children[1].innerHTML = diamond.Count;
    inventroyOre.children[6].children[1].innerHTML = redstone_dust.Count;
    inventroyOre.children[7].children[1].innerHTML = lapis_lazuli.Count;
    inventroyOre.children[8].children[1].innerHTML = emerald.Count;
    inventroyOre.children[9].children[1].innerHTML = netherite_ingot.Count;
}, 1);*/





// luckChest
setInterval(() => {
    var summonChest = Math.floor(Math.random() * 1000);
    if (summonChest >= 0 && summonChest <= 6) {

        luckyChest();

    };
}, 1000);


var luckChests = [];

function luckyChest() {
    var randomX = Math.floor(Math.random() * (window.innerWidth / 2 - 80));
    var randomY = Math.floor(Math.random() * window.innerHeight - 80);

    luckChests[luckChests.length] = document.createElement('img');

    var thisLC = luckChests[luckChests.length - 1];

    thisLC.src = "./img/luckyChest.webp";
    thisLC.classList.add('luckyChest')
    thisLC.style.position = "absolute";
    thisLC.style.top = randomY + "px";
    thisLC.style.left = randomX + "px";

    leftArea.appendChild(thisLC);

    setTimeout(() => {
        thisLC.remove();
    }, 10000);

};

for (let i = 0; i < luckChests.length; i++) {
    luckChests[i].addEventListener("click", (e) => {
        if (e.target.classList == "luckyChest") {
            e.target.style.pointerEvents = "none";
            e.target.style.height = "85px";
            e.target.style.width = "85px";
            e.target.style.left = String(e.target.style.left).replace(/px/g, "") - 16 + "px";
            e.target.style.top = String(e.target.style.top).replace(/px/g, "") - 19 + "px";
            e.target.src = "./img/luckyChestOpen.webp";

            //oepnLuckyChest();

            setTimeout(() => {
                e.target.remove();
            }, 500);
        };
    });
};






// menu

const menuIcon = document.getElementById('menuIcon');
const pageLeftButton = document.getElementById('pageLeft');
const pageRightButton = document.getElementById('pageRight');
const menuLabel = document.getElementById('menuName');


var menus = [];
var selectedMenu = 0;
// crafting
menus[0] = 1;
// smelting
menus[1] = 1;
// enchanting
menus[2] = 1;
// shop
menus[3] = 1;
// bazaar
menus[4] = 1;





// 描画
for (let i = 0; i < menus.length; i++) {
    if (menus[i] == 0) {
        menuIcon.style.filter = "grayscale(100%)";
    } else
    if (menus[i] == 1) {
        menuIcon.style.filter = "grayscale(0%)";
    };
};


pageRightButton.onclick = () => {
    if (selectedMenu < 4) {
        selectedMenu += 1;
        changeMenu(getMenuName(selectedMenu), selectedMenu);
    };
};

pageLeftButton.onclick = () => {
    if (selectedMenu > 0) {
        selectedMenu -= 1;
        changeMenu(getMenuName(selectedMenu), selectedMenu);
    };


};






function getMenuName(n) {
    if (n == 0) {
        return "craftingTable.webp";
    } else
    if (n == 1) {
        return "furnace.webp";
    } else
    if (n == 2) {
        return "enchantedTable.webp";
    } else
    if (n == 3) {
        return "shop.webp";
    } else
    if (n == 4) {
        return "bazaar.webp";
    }
};



const menuTops = document.getElementsByClassName('menuTop');

function changeMenu(fileName, menuNum) {
    // alert("./img/menuIcons/"+fileName);
    menuIcon.src = "./img/menuIcons/" + fileName;

    if (menus[menuNum] == 0) {
        menuIcon.style.filter = "grayscale(100%)";
        menuLabel.style.color = "gray";
    } else
    if (menus[menuNum] == 1) {
        menuIcon.style.filter = "grayscale(0%)";
        menuLabel.style.color = "black";
    };

    menuLabel.innerHTML = getMenuLabel(menuNum);

    for (let i = 0; i < menuTops.length; i++) {
        if (i == menuNum && menus[menuNum] == 1) {
            menuTops[i].hidden = false;
        } else
        if (i != menuNum) {
            menuTops[i].hidden = true;
        };
    };

};


function getMenuLabel(n) {
    if (n == 0) {
        return "crafting";
    } else
    if (n == 1) {
        return "smelting";
    } else
    if (n == 2) {
        return "enchanting";
    } else
    if (n == 3) {
        return "shop";
    } else
    if (n == 4) {
        return "bazaar";
    };
}





// craft
const craftingDiv = document.getElementById('craftingDiv');
var canCrafting = [];

canCrafting[0] = 1;
canCrafting[1] = 1;
canCrafting[2] = 1;
canCrafting[3] = 1;
canCrafting[4] = 1;
// canCrafting[5]=1;
// canCrafting[6]=1;











// レシピ
var recipeIcon = [];


//setInterval(() => {
for (let i = 0; i < recipeBook.length; i++) {

    if (i == 0) {
        var pos = [];
        pos[0] = 0;
        pos[1] = 0;
    };






    recipeIcon[i] = document.createElement('img');
    recipeIcon[i].classList.add('recipeIcon');
    recipeIcon[i].src = recipeBook[i].ItemI.ImageURL;
    //recipeIcon[i].remove();

    recipeIcon[i].style.left = recipeIconPos(pos[0]);
    recipeIcon[i].style.top = recipeIconPos(pos[1]);

    craftingDiv.appendChild(recipeIcon[i]);





    pos[0]++;
    if (pos[0] == 10) {
        pos[0] = 0;
        pos[1]++;
    }
}
//}, 1);



function recipeIconPos(n) {
    return n * 54 + "px";
};



for (let i = 0; i < recipeBook.length; i++) {
    recipeIcon[i].onclick = () => {

        var CountCheck = 0;

        for (let n = 0; n < recipeBook[i].ItemII.length; n++) {

            if (recipeBook[i].ItemII[n].Count >= recipeBook[i].CountII[n]) {
                CountCheck++;
            };


        };

        if (CountCheck == recipeBook[i].ItemII.length) {
            craftItem(i);
        };



    }


    recipeIcon[i].onmousemove = (e) => {
        toolTip.hidden = false;


        toolTip.innerHTML = recipeBook[i].ItemI.Name;


        if (recipeBook[i].ItemI.Rarity == "common") {
            toolTip.innerHTML += "<br><span style='color: gray;font-weight: bold;'>COMMON</span>";
        } else
        if (recipeBook[i].ItemI.Rarity == "uncommon") {
            toolTip.innerHTML += "<br><span style='color: green;font-weight: bold;'>UNCOMMON</span>";
        } else
        if (recipeBook[i].ItemI.Rarity == "rare") {
            toolTip.innerHTML += "<br><span style='color: blue;font-weight: bold;'>RARE</span>";
        } else
        if (recipeBook[i].ItemI.Rarity == "epic") {
            toolTip.innerHTML += "<br><span style='color: purple;font-weight: bold;'>EPIC</span>";
        } else
        if (recipeBook[i].ItemI.Rarity == "legendary") {
            toolTip.innerHTML += "<br><span style='color: orange;font-weight: bold;'>LEGENDARY</span>";
        };

        toolTip.innerHTML += "<br><br><br><span style='color: skyblue;'>Requires</span>"

        toolTip.innerHTML += "<ul>";

        for (let j = 0; j < recipeBook[i].ItemII.length; j++) {
            toolTip.innerHTML += "<li>" + recipeBook[i].ItemII[j].Name + " × " + recipeBook[i].CountII[j] + "</li>";
        }

        toolTip.innerHTML += "</ul>";


        /*if(recipeBook[i].Tooltip!=undefined){
            toolTip.innerHTML=recipeBook[i].Tooltip;
        };*/
        //alert(String((window.innerWidth-e.pageX)/2)+", "+String(e.pageX))





        /*if(screen.width<document.body.clientWidth){
            toolTip.style.right=(screen.width)-e.pageX+10+"px";
        };*/

    };
    recipeIcon[i].onmouseout = (e) => {
        toolTip.hidden = true;
        toolTip.innerHTML = "";
    };

};



setInterval(() => {
    document.onmousemove = (e) => {


        if (toolTip.hidden == false) {
            if (e.pageY >= Math.floor(window.innerHeight / 5) * 3) {
                toolTip.style.top = "";
                toolTip.style.bottom = (window.innerHeight) - e.pageY - 10 + "px";
            };
            if (e.pageY <= Math.floor(window.innerHeight / 5) * 3) {
                toolTip.style.bottom = "";
                toolTip.style.top = e.pageY + 10 + "px";
            };

            if (e.pageX >= Math.floor(window.innerWidth / 5) * 3) {
                toolTip.style.left = "";
                toolTip.style.right = (document.body.clientWidth) - e.pageX + 10 + "px";
                //alert(toolTip.style.right);
            };
            if ((e.pageX <= Math.floor(window.innerWidth / 5) * 3)) {
                toolTip.style.right = "";
                toolTip.style.left = e.pageX + 10 + "px";
            }
        }
    };

    document.onmouseover = (e) => {


        if (toolTip.hidden == false) {
            if (e.pageY >= Math.floor(window.innerHeight / 4) * 3) {
                toolTip.style.top = "";
                toolTip.style.bottom = (window.innerHeight) - e.pageY - 10 + "px";
            };
            if (e.pageY <= Math.floor(window.innerHeight / 4) * 3) {
                toolTip.style.bottom = "";
                toolTip.style.top = e.pageY + 10 + "px";
            };

            if (e.pageX >= Math.floor(window.innerWidth / 4) * 3) {
                toolTip.style.left = "";
                toolTip.style.right = (document.body.clientWidth) - e.pageX + 10 + "px";
                //alert(toolTip.style.right);
            };
            if ((e.pageX <= Math.floor(window.innerWidth / 4) * 3)) {
                toolTip.style.right = "";
                toolTip.style.left = e.pageX + 10 + "px";
            }
        }
    };
}, 1);




function craftItem(n) {
    for (let i = 0; i < recipeBook[n].ItemII.length; i++) {
        // alert(i);
        // eval(recipeBook[n].ItemII[i]+"="+recipeBook[n].CountII[i]+";");

        recipeBook[n].ItemII[i].subCount = recipeBook[n].CountII[i];
    };

    if (recipeBook[n].Def != "") {
        eval(recipeBook[n].Def);
    };

    recipeBook[n].ItemI.addCount = Number(recipeBook[n].CountI);

};



const inventory = document.getElementById('viewInventory');


var strageIcon = [];
var strageLabel = [];

//grayBack.hidden=false;





/*for(let i=0;i<itemsLength;i++){
    var br=document.createElement('br');
    strageIcon[i]=document.createElement('img');
    strageIcon[i].src=itemsDataStrange[i].ImageURL;
    strageIcon[i].style.height="1rem";
    strageIcon[i].style.width="1rem";
    strageLabel[i]=document.createElement('label');
    strageLabel[i].innerHTML=itemsDataStrange[i].Name+" : "+itemsDataStrange[i].Count;
    viewInventory.appendChild(strageIcon[i])
    viewInventory.appendChild(strageLabel[i]);
    if(i%2==1){
        viewInventory.append(br);
    }else{
        viewInventory.append("　　　")
    }
};*/
