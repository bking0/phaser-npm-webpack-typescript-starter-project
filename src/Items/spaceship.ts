import Item from './Item';
import * as Assets from '../assets';
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
    RotateClockwise() {
        this._spaceshipImage.angle += 5;
    }
    RotateCounterClockwise() {
        this._spaceshipImage.angle -= 5;
    }
    AboutFace() {
        this._spaceshipImage.angle -= 180;
    }
    Fire(game) {

    }

}