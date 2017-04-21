
export default class Keys {
    private _Fire: Phaser.Key;
    public get Fire(): Phaser.Key {
        return this._Fire;
    }
    public set Fire(v: Phaser.Key) {
        this._Fire = v;
    }

    private _Left: Phaser.Key;
    public get Left(): Phaser.Key {
        return this._Left;
    }
    public set Left(v: Phaser.Key) {
        this._Left = v;
    }

    private _Right: Phaser.Key;
    public get Right(): Phaser.Key {
        return this._Right;
    }
    public set Right(v: Phaser.Key) {
        this._Right = v;
    }

    private _Up: Phaser.Key;
    public get Forward(): Phaser.Key {
        return this._Up;
    }
    public set Forward(v: Phaser.Key) {
        this._Up = v;
    }

    private _Down: Phaser.Key;
    public get Back(): Phaser.Key {
        return this._Down;
    }
    public set Back(v: Phaser.Key) {
        this._Down = v;
    }


}