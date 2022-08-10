function autoSave() {
    // プレイヤーのステータス
    localStorage.setItem("_player_name", Player.Name);

    localStorage.setItem("_player_coins", Number(Player.Coins));

    // バザーの情報
    for (let i = 0; i < forBazaars.length; i++) {
        localStorage.setItem(eval("'" + "marketPrice_" + i + "'"), forBazaars[i].Price);
    };

    // アイテムの所持状況を保存
    for (let i = 0; i < itemsLength; i++) {
        localStorage.setItem(eval("'" + "inv_items_" + i + "'"), itemsDataStrange[i].Count);
    };





    // menu
    localStorage.setItem("select_enchant_item", selectEnchantItem.ItemValue);

    // message('alert', "Saved!", "yellow", [])
}
