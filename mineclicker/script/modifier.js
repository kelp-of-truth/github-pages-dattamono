// 修飾子

/*

    modifier一覧

    ・アクセサリー
        Hard
        Guarding
        Armored
        Warding

	    Arcane

        Precise
        Lucky
        
        Jagged
        Spiked
        Angry
        Menacing

        Brisk
        Fleeting
        Hasty
        Quick

    

*/

wooden_pickaxe.setModifier="<span class='modifierSpan' style='color: orange;'>Legendary</span>";

setInterval(() => {
    for(let i=0;i<itemsLength;i++){
        if(itemsDataStrange[i].ItemType=="pickaxe" || itemsDataStrange[i].ItemType=="weapon"){
            itemsDataStrange[i].changeName=itemsDataStrange[i].Modifier+" "+String(itemsDataStrange[i].Id).replace(/_/g, " ")
        };
    };
}, 1);