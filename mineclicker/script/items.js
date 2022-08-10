// アイテム数が上限を超えていないか確認する
setInterval(() => {
    for(let i=0;i<itemsLength;i++){
        if(itemsDataStrange[i].Count>9999){
            itemsDataStrange[i].setCount=9999;
        };
    };
}, 1);








// class作成
var itemsLength=0;
var itemsDataStrange=[];
class item {
    constructor(id, name, imageURL, itemType, rarity, count, data, itemNum, modifier, itemValue) {
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
        this.itemType = itemType;
        this.rarity = rarity;
        this.count = count;
        this.data=data;

        itemsDataStrange[itemsLength]=this;
        this.itemValue=itemsLength;

        itemsLength++;

        this.itemNum=itemsLength;


        if(this.data==undefined){
            if(this.itemType=="material" || this.itemType=="ore"){
                this.data=[false, true];
            }
        };

        if(this.itemType=="pickaxe" || this.itemType=="weapon"){
            this.modifier=""+" ";
            this.name=this.modifier+this.name;
        };
    }


    get Id() {
        return this.id;
    }
    get Name() {
        return this.name;
    }
    get ImageURL() {
        return this.imageURL;
    }
    get ItemType() {
        return this.itemType;
    }
    get Rarity() {
        return this.rarity;
    }
    get Count() {
        return this.count;
    }

    get Length(){
        return this.itemNum;
    }

    get getData(){
        var dataStr=[];

        for(let i=0;i<this.data.length;i++){
            dataStr[i]=this.data[i];
        };
        return dataStr;
    }

    get Modifier(){
        return this.modifier;
    }

    get ItemValue(){
        return this.itemValue;
    }


    set addCount(value) {
        this.count += value;
    }
    set subCount(value) {
        this.count -= value;
    }
    set setCount(value){
        this.count=value;
    }

    set setModifier(value){
        this.modifier=value;
    }

    set changeName(value){
        this.name=value;
    }
}






// ツルハシ
const wooden_pickaxe = new item("wooden_pickaxe", "wooden pickaxe", ".//img/textures/wooden_pickaxe.webp", "pickaxe", "common", 1, [false, false]);
const stone_pickaxe = new item("stone_pickaxe", "stone pickaxe", ".//img/textures/stone_pickaxe.webp", "pickaxe", "common", 0, [false, false]);
const iron_pickaxe = new item("iron_pickaxe", "iron pickaxe", ".//img/textures/iron_pickaxe.webp", "pickaxe", "uncommon", 0, [false, false]);
const gold_pickaxe = new item("gold_pickaxe", "gold pickaxe", ".//img/textures/gold_pickaxe.webp", "pickaxe", "uncommon", 0, [false, false]);
const diamond_pickaxe = new item("diamond_pickaxe", "diamond pickaxe", ".//img/textures/diamond_pickaxe.webp", "pickaxe", "uncommon", 0, [false, false]);
const netherite_pickaxe = new item("nethrite_pickaxe", "netherite pickaxe", ".//img/textures/netherite_pickaxe.webp", "pickaxe", "rare", 0, [false, false]);



// 作業アイテム
const furnace = new item("furnace", "furnace", ".//img/textures/furnace.webp", "craftItem", "common", 0, [false, true]);
const enchanting_table = new item("enchaning_table", "enchanting table", ".//img/textures/enchanting_table.webp", "craftItem", "common", 0, [false, true]);
const smithing_table = new item("smithing_table", "smithing table", ".//img/textures/smithing_table.webp", "craftItem", "common", 0, [false, true]);


// 素材系アイテム

const book = new item("book", "book", ".//img/textures/book.webp", "material", "common", 0);
const leather = new item("leather", "leather", ".//img/textures/leather.webp", "material", "common", 0);
const paper = new item("paper", "paper", ".//img/textures/paper.webp", "material", "common", 0);
const sugar_cane = new item("sugar_cane", "sugar cane", ".//img/textures/sugar_cane.webp", "material", "common", 0);

    // ドリル素材
    const drill_parts = new item("drill_parts", "drill parts", ".//img/textures/drill_parts.webp", "material", "common", 1);



// オーバーワールド鉱石
const cobblestone = new item("cobblestone", "cobblestone", ".//img/textures/cobblestone.webp", "material", "common", 0);
const coal = new item("coal", "coal", ".//img/textures/coal.webp", "material", "common", 0);
const iron_ingot = new item("iron_ingot", "iron ingot", ".//img/textures/iron_ingot.webp", "ore", "material", 0);
const gold_ingot = new item("gold_ingot", "gold ingot", ".//img/textures/gold_ingot.webp", "material", "uncommon", 0);
const copper_ingot = new item("copper_ingot", "copper ingot", ".//img/textures/copper_ingot.webp", "material", "common", 0);
const diamond = new item("diamond", "diamond", ".//img/textures/diamond.webp", "material", "uncommon", 0);
const redstone_dust = new item("redstone_dust", "redstone dust", ".//img/textures/redstone_dust.webp", "material", "common", 0);
const lapis_lazuli = new item("lapis_lazuli", "lapis lazuli", ".//img/textures/lapis_lazuli.webp", "material", "common", 0);
const emerald = new item("emerald", "emerald", ".//img/textures/emerald.webp", "material", "rare", 0);
const platinum_ingot=new item("platinum_ingot", "platinum ingot", ".//img/textures/platinum_ingot.webp", "material", "rare", 10);


// ネザー鉱石
const netherrack = new item("netherrack", "netherrack", ".//img/textures/netherrack.webp", "material", "common", 10);
const obsidian = new item("obsidian", "obsidian", ".//img/textures/obsidan.webp", "material", "uncommon", 0);
const hellstone_ingot=new item("hellstone_ingot", "hellstone ingot", ".//img/textures/hellstone_ingot.webp", "material", "uncommon", 0);
const netherite_ingot = new item("netherite_ingot", "netherite ingot", ".//img/textures/netherite_ingot.webp", "material", "rare", 0);


// エンド鉱石
const end_stone=new item("end_stone", "end stone", ".//img/textures/end_stone.webp", "material", "common", 10);
const cobalt_ingot=new item("cobalt_ingot", "cobalt ingot", ".//img/textures/cobalt_ingot.webp", "material", "uncommon", 10);
const palladium_ingot=new item("palladium_ingot", "palladium ingot", ".//img/textures/palladium_ingot.webp", "material", "uncommon",10);
const mythril_ingot=new item("mythril_ingot", "mythril ingot", ".//img/textures/mythril_ingot.webp", "material", "rare", 10);
const orichalcum_ingot=new item("orichalcum_ingot", "orichalcum ingot", ".//img/textures/orichalcum_ingot.webp", "material", "rare", 10);
const adamantite_ingot=new item("adamantite_ingot", "adamantite ingot", ".//img/textures/adamantite_ingot.webp", "material", "epic", 10);
const titanium_ingot=new item("titanium_ingot", "titanium ingot", ".//img/textures/titanium_ingot.webp", "material", "epic", 10);

// 強化鉱石
const stone = new item("stone", "stone", ".//img/textures/stone.webp", "material", "uncommon", 0);
const cokes = new item("cokes", "cokes", ".//img/textures/cokes.webp", "material", "uncommon", 0);
const steel = new item('steel', "steel", ".//img/textures/steel.webp", "material", "rare", 0);
const royal_gold = new item("royal_gold", "royal gold", ".//img/textures/royal_gold.webp", "common", "epic", 0);
const rust_prevention_copper = new item('rust_prevention_copper_ingot', "rust prevention copper", ".//img/textures/rust_prevention_copper.webp", "material", "uncommon", 0);
const hardness_diamond = new item("hardness_diamond", "hardness diamond", ".//img/textures/hardness_diamond.webp", "material", "rare", 0);
const redstone_block = new item("redstone_block", "redstone block", ".//img/textures/restone_block.webp", "material", "uncommon", 0);
const enchanted_lapis_lazuli = new item('enchanted_lapis_lazuli', "enchanted lapos lazuli", ".//img/textures/enchanted_lapis_lazuli.webp", "material", "uncommon", 0);
const rich_man_s_block = new item("rich man's block", "rich man's block", ".//img/textures/rich_man_s_block.webp", "material", "epic", 0);
const ultimate_ingot = new item('ultimate_ingot', "ultimate ingot", ".//img/textures/ultimate_ingot.webp", "material", "epic", 1);







// 一般
const iron_drill = new item("iron_drill", "iron drill", ".//img/textures/iron_drill.webp", "drill", "rare", 1);
const gold_drill = new item("gold_drill", "gold drill", ".//img/textures/gold_drill.webp", "drill", "rare", 1);
const diamond_drill = new item("diamond_drill", "diamond drill" ,".//img/textures/diamond_drill.webp", "drill", "epic", 1);
const netherite_drill = new item("netherite_drill", "netherite drill" ,".//img/textures/netherite_drill.webp", "drill", "epic", 1);



