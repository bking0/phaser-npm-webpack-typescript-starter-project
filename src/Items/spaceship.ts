import { dirname } from 'path';
import Item from './Item';
import * as Assets from '../assets';
import * as consts from '../consts';

export default class Spaceship extends Item {
    /**
     *
     */
    private _spaceshipImage: Phaser.Image;


    constructor(game) {
        super();
        this.ImageHeight = 64;
        this.ImageWidth = 64;
        // let center = super.GetImageCenter(game.world.centerX, game.world.centerY);
        this._spaceshipImage = game.add.image(game.world.centerX, game.world.centerY, Assets.Images.ImagesSpaceship.getName());
        this._spaceshipImage.anchor.setTo(0.5, 0.5);

    }

    GetImage(game) {
        return this._spaceshipImage;
    }

    Rotate(key: string) {
        
        if (key == consts.LEFT)
            this._setRotation(this._leftDirection);
        else if (key == consts.RIGHT)
            this._setRotation(this._rightDirection);
    }
    private _setRotation(dir: string) {
        if (dir == consts.CLOCKWISE) {
            this._spaceshipImage.angle += 2;
        } else if (dir == consts.COUNTER_CLOCKWISE) {
            this._spaceshipImage.angle -= 2;
        }
    }
    private _leftDirection: string = consts.CLOCKWISE;
    private _rightDirection: string = consts.COUNTER_CLOCKWISE;
    SetDirection() {
        let left = 90;
        let right = -90;
        let top = 180;
        let bottom = 0;
        console.log(this._spaceshipImage.angle);
        //north
        if ((this._spaceshipImage.angle > left && this._spaceshipImage.angle < top)
            || (this._spaceshipImage.angle > top &&  this._spaceshipImage.angle < right)) {
            console.log("north");
            this._leftDirection = consts.COUNTER_CLOCKWISE;
            this._rightDirection = consts.CLOCKWISE;
        }
        //south
        if ((this._spaceshipImage.angle < left && this._spaceshipImage.angle > bottom) || 
            (this._spaceshipImage.angle > right && this._spaceshipImage.angle < bottom)) {
            console.log("south");
            this._leftDirection = consts.CLOCKWISE;
            this._rightDirection = consts.COUNTER_CLOCKWISE;
        };
    }

    AboutFace() {
        this._spaceshipImage.angle -= 180;
    }


    private _isMoving: boolean;
    public get isMoving(): boolean {
        return this._isMoving;
    }
    SetMoving() {
        this._isMoving = true;
    }
    SetNotMoving() {
        this._isMoving = false;
    }

    IsFacing(direction: string) {

    }
    Fire(game) {

    }

}