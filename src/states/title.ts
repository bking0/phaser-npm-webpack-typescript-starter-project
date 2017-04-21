import * as Assets from '../assets';
import Spaceship from '../Items/spaceship';
import Keys from '../Items/Keys';
import * as consts from '../consts';

export default class Title extends Phaser.State {
    private projectileSpritesheet: Phaser.Sprite = null;
    private spaceship: Spaceship = null;
    private weapon: Phaser.Weapon = null;
    private _keys: Keys = new Keys();

    public preload(): void {

        this.spaceship = new Spaceship(this.game);

        this._keys.Left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        // this._keys.Left.onUp.add(this.spaceship.SetDirection, this.spaceship);
      
        this._keys.Right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        // this._keys.Right.onUp.add(this.spaceship.SetDirection, this.spaceship);
        
        this._keys.Forward = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);

        this._keys.Back = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this._keys.Back.onDown.add(this.spaceship.AboutFace, this.spaceship);

        this._keys.Fire = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


        let gameX: number = this.game.world.centerX;
        let gameY: number = this.game.world.centerY;
        this.addProjectiles(gameX, gameY);
        this.projectileSpritesheet = this.game.add.sprite(
            gameX,
            gameY,
            Assets.Spritesheets.SpritesheetsProjectileSprites.getName()
        );
        this.projectileSpritesheet.animations.add('projectile', [56]);
        this.projectileSpritesheet.animations.play('projectile', 30, true);
    }

    public create(): void {
        // this.game.camera.flash(0x000000, 1000);
    }

    public update(): void {
        if (this._keys.Left.isDown) {
            this.spaceship.Rotate("left");
        }
        if (this._keys.Right.isDown) {
            this.spaceship.Rotate("right");
        }
    }
    private addProjectiles(x: number, y: number): void {
        this.weapon = this.add.weapon(10, 'bullet');
        this.weapon.fireFrom.setTo(x, y, 1, 1);
    }

}