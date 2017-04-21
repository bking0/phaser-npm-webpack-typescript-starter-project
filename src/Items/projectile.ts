import Item from './Item';
import * as Assets from '../assets';
export default class Projectile extends Item {
    /**
     *
     */
    private projectileSpritesheet: Phaser.Sprite = null;

    constructor(game) {
        super();
        this.ImageHeight = 31;
        this.ImageWidth = 31;
        // let center = super.GetImageCenter(game.world.centerX, game.world.centerY);
        this.projectileSpritesheet = game.add.sprite(
            game.world.centerX,
            game.world.centerY,
            Assets.Spritesheets.SpritesheetsProjectileSprites.getName()
        );
        this.projectileSpritesheet.anchor.setTo(0.5, 0.5);
        this.projectileSpritesheet.animations.add('projectile', [56]);
        this.projectileSpritesheet.animations.play('projectile', 30, true);
    }
}