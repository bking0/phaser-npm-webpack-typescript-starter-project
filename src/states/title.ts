import * as Assets from '../assets';
import Spaceship from '../Items/spaceship';
import Projectile from '../Items/projectile';
import Keys from '../Items/Keys';

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

        this._keys.Up = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this._keys.Up.onDown.add(this.spaceship.AboutFace, this.spaceship);

        this._keys.Down = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this._keys.Down.onDown.add(this.spaceship.AboutFace, this.spaceship);

        this._keys.Fire = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        // this.addProjectiles(gameX, gameY);
    }

    public create(): void {
        // this.game.camera.flash(0x000000, 1000);
    }
    public update(): void {
        if (this._keys.Left.isDown) {
            this.spaceship.RotateClockwise();
        }
        if (this._keys.Right.isDown) {
            this.spaceship.RotateCounterClockwise();
        }
    }
    private addProjectiles(x: number, y: number): void {
        this.weapon = this.game.add.weapon(10, 'projectile');
        let w = this.weapon;
        w.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS; // auto kills when out of world
        w.bulletSpeed = 300;
        w.fireRate = 50;
        // w.track
    }

}