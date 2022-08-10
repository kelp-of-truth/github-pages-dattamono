// ゲームロード時に実行する関数
function loadDef() {





    






    // localStorage.removeItem("visited");

    disabelKeyEvents = 0;

    changeMenu("bazaar.webp", 4);

    //localStorage.removeItem("_player");

    var visitedC = localStorage.getItem("visited");


    // 初期ログイン時
    if (visitedC == null) {

        localStorage.setItem("visited", "true");

        setTimeout(() => {


            // プレイヤーのステータスを設定
            Player.changeName = prompt("Your name is...");
            localStorage.setItem("_player_name", Player.Name);

            localStorage.setItem('_player_coins', Player.Coins);


            // 相場
            for (let i = 0; i < forBazaars.length; i++) {
                localStorage.setItem(eval("'" + "marketPrice_" + i + "'"), Number(forBazaars[i].Price));
            };

            // アイテムの所持状況を保存
            for (let i = 0; i < itemsLength; i++) {
                localStorage.setItem(eval("'" + "inv_items_" + i + "'"), itemsDataStrange[i].Count);
            };


            localStorage.setItem("select_enchant_item", selectEnchantItem.ItemValue);


        }, 1);



    } else
    if (visitedC == "true") {






        Player.changeName = localStorage.getItem("_player_name");
        Player.setCoins = Number(localStorage.getItem('_player_coins'));

        for (let i = 0; i < forBazaars.length; i++) {
            forBazaars[i].changePrice = Number(localStorage.getItem(eval("'" + "marketPrice_" + i + "'")));
        };

        for (let i = 0; i < itemsLength; i++) {
            itemsDataStrange[i].setCount = Number(localStorage.getItem(eval("'" + "inv_items_" + i + "'")));
        };


        selectEnchantItem=itemsDataStrange[Number(localStorage.getItem("select_enchant_item"))]



    };
};
