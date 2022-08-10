class playerData {
    constructor(name, coins) {
        this.name = name;
        this.coins = coins;
    };

    get Name() {
        return this.name;
    };
    get Coins() {
        return this.coins;
    }

    set changeName(value) {
        this.name = value;
    };
    set addCoins(value) {
        this.coins += value;
    };
    set subCoins(value) {
        this.coins -= value;
    }
    set setCoins(value) {
        this.coins = value;
    }
}

const Player = new playerData("no name", 00);