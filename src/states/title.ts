import * as Assets from '../assets';
import Spaceship from '../Items/spaceship';
import Projectile from '../Items/projectile';
import Keys from '../Items/Keys';
import * as consts from '../consts';

export default class Title extends Phaser.State {
    private spaceship: Spaceship = null;
    private projectile: Projectile = null;
    private weapon: Phaser.Weapon = null;
    private _keys: Keys = new Keys();

    public preload(): void {

        this.spaceship = new Spaceship(this.game);
        this.projectile = new Projectile(this.game);

        this._keys.Left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this._keys.Right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        // this._keys.Right.onUp.add(this.spaceship.SetDirection, this.spaceship);
        
        this._keys.Forward = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);

        this._keys.Back = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this._keys.Back.onDown.add(this.spaceship.AboutFace, this.spaceship);

        this._keys.Fire = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
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
}