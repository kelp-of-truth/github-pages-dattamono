class recipe {
    constructor(itemI, itemII, countI, countII, cost, def, data) {
        this.itemI = itemI;
        this.itemII = itemII;
        this.countI = countI;
        this.countII = countII;
        this.cost = cost;
        this.def = def;
    }

    get ItemI() {
        return this.itemI;
    }
    get ItemII() {
        var itemIIStrage = [];
        for (let i = 0; i < this.itemII.length; i++) {
            itemIIStrage[i] = this.itemII[i];
        };
        return itemIIStrage;
    }
    get CountI() {
        return this.countI;
    }

    get CountII() {
        var countIIStrage = [];
        for (let i = 0; i < this.countII.length; i++) {
            countIIStrage[i] = this.countII[i];
        };
        return countIIStrage;
    }

    get Cost() {
        return this.cost;
    }
    get Tooltip() {
        return this.tooltip;
    }
    get Def() {
        return this.def;
    }






}

var notDel;
var notUse;

var recipeBook = [];

// ツルハシ
recipeBook[0] = new recipe(stone_pickaxe, [cobblestone, wooden_pickaxe], [1], [64, 1], 100, "get_stone_pickaxe();");
recipeBook[1] = new recipe(iron_pickaxe, [iron_ingot, stone_pickaxe], [1], [64, 1], 500, "get_iron_pickaxe();");
recipeBook[2] = new recipe(gold_pickaxe, [gold_ingot, iron_pickaxe], [1], [64, 1], 2000, "get_gold_pickaxe();");
recipeBook[3] = new recipe(diamond_pickaxe, [diamond, gold_pickaxe], [1], [64, 1], 3000, "get_diamond_pickaxe();");
recipeBook[4] = new recipe(netherite_pickaxe, [netherite_ingot, diamond_pickaxe], [1], [64, 1], 5000, "get_netherite_pickaxe();");

// クラフトアイテム
recipeBook[5] = new recipe(furnace, [cobblestone], [1], [8], 100, "furnace_get();");
recipeBook[6] = new recipe(enchanting_table, [diamond, obsidian, book], [1], [2, 4, 1], 10000, "");
// recipeBook[6]=new recipe();

// 素材

// enchanting table-
recipeBook[7] = new recipe(book, [leather, paper], [1], [1, 3], 100, "");
recipeBook[8] = new recipe(paper, [sugar_cane], [3], [3], 20, "");




recipeBook[9] = new recipe(stone, [cobblestone], [1], [320], 100, "");
recipeBook[10] = new recipe(cokes, [coal], [1], [320], 150, "");
recipeBook[11] = new recipe(steel, [iron_ingot], [1], [320], 11, 250, "");
recipeBook[12] = new recipe(royal_gold, [gold_ingot], [1], [320], 500, "");
recipeBook[13] = new recipe(rust_prevention_copper, [copper_ingot], [1], [320], 200, "");
recipeBook[14] = new recipe(enchanted_lapis_lazuli, [lapis_lazuli], [1], [320], 250, "");
recipeBook[15]=new recipe(rich_man_s_block, [emerald], [1], [320], 500, "");
recipeBook[16]=new recipe(ultimate_ingot, [netherite_ingot], [1], [320], 1000, "");

