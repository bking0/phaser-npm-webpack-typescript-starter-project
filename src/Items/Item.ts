export default class Item {
    constructor() {
    }

    private _imageWidth: number;
    public get ImageWidth(): number {
        return this._imageWidth;
    }
    public set ImageWidth(v: number) {
        this._imageWidth = v;
    }


    private _imageHeight: number;
    public get ImageHeight(): number {
        return this._imageHeight;
    }
    public set ImageHeight(v: number) {
        this._imageHeight = v;
    }



}