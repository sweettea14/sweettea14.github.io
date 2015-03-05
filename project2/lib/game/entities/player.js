ig.module(
	'game.entities.player'
)

.requires(
	'impact.entity',
	'impact.sound'
//	'plugins.joncom.box2d.entity'
)
.defines(function(){
	EntityPlayer = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/player1.png', 50, 50),
		size: {x: 18, y: 48},
		offset: {x: 18, y: 2},
		flip: false,
		maxVel: {x: 100, y: 150},
		friction: {x: 600, y: 0},
		accelGround: 400,
		accelAir: 200,
		jump: 200,
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.PASSIVE,
		health: 30,
		weapon: 0,
		totalWeapons: 2,
		activeWeapon: "EntityBullet",
		startPosition: null,
		invincible: true,
		invincibleDelay: 2,
		invincibleTimer:null,
		swimming: false,
		climbing: false,
		swinging: false,
		flying: false,
		hasKey: false,
		r: 50,
		theta: 120,
		radians: 0,
		rope: null,
		baseX: 0,
		baseY: 0,
		gravityFactor: 1,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(255, 0, 0, 0.7)',
		jumpSFX: new ig.Sound('media/sounds/jump.*'),
		shootSFX: new ig.Sound('media/sounds/shoot.*'),
		deathSFX: new ig.Sound('media/sounds/death.*'),
		
		
		init: function(x, y, settings){
			this.startPosition = {x:x,y:y};
			this.parent(x, y, settings);
			this.setupAnimation(this.weapon);
			this.invincibleTimer = new ig.Timer();
			this.makeInvincible();
		},
		
		setupAnimation: function(offset){
				offset = offset * 16;
				this.addAnim('idle', 1, [0+offset]);
				this.addAnim('run', .1, [0+offset, 1+offset,2+offset,3+offset,4+offset]);
				this.addAnim('jump', .7, [8+offset, 9+offset]);
				this.addAnim('fall', 0.9, [6+offset,7+offset]);
				this.addAnim('swim', .5, [10+offset, 11+offset]);
				this.addAnim('climb', .5, [12+offset, 13+offset]);
				this.addAnim('fly', .5, [14+offset, 15+offset]);
		},
		
		update: function(){
			//move left or right
			var accel = this.standing ? this.accelGround : this.accelAir;
			if(ig.input.state('left')){
				this.accel.x = -accel;
				this.flip = true;
			//	ig.input.actions = {};
			//	ig.input.presses = {};
			}else if(ig.input.state('right')){
				this.accel.x = accel;
				this.flip = false;
			//	ig.input.actions = {};
			}else{
				this.accel.x = 0;
			}
			if(this.swimming==true){//Swimming
				if(ig.input.state('up')){
					this.accel.y = -300;
				}
				else if(ig.input.state('down')){
					this.accel.y = 300;
				}
				else{
					this.accel.y = 0;
					}
			}
			if(this.swinging==true){//Swinging
				this.pos.x = this.baseX - this.r*Math.sin(this.rope.angle);
				this.pos.y = this.baseY + this.r*Math.cos(this.rope.angle);
			}
			if(this.flying==true){//Flying
				if(ig.input.state('up')){
					this.accel.y = -100;
				}
				else if(ig.input.state('down')){
					this.accel.y = 100;
				}
				else{
					this.accel.y = 0;
					}
			}
			if(this.climbing==true){//Climbing
				if(ig.input.state('up')){
					this.accel.y = -50;
				}
				else if(ig.input.state('down')){
					this.accel.y = 60;
				}
				else{
					this.accel.y = 50;
					}
			}
			//jump
			if(this.standing && ig.input.pressed('jump')){
				this.vel.y = -this.jump;
				if(ig.game.mute == false)
					this.jumpSFX.play();
			}
			
			//shoot
			if(ig.input.pressed('shoot')){
				if(this.activeWeapon == "EntityBullet"){
					ig.game.spawnEntity(this.activeWeapon, this.flip ? this.pos.x - 16 : this.pos.x+17, this.pos.y+7, {flip:this.flip});
				}
				if(this.activeWeapon == "EntityGrenade"){
					ig.game.spawnEntity(this.activeWeapon, this.pos.x+4, this.pos.y-5, {flip:this.flip});
				}
				if(ig.game.mute == false)
					this.shootSFX.play();
			}
			//switch
			if(ig.input.pressed('switch')){
				this.weapon++;
				if(this.weapon >= this.totalWeapons)
					this.weapon = 0;
				switch(this.weapon){	case(0):
						this.activeWeapon = "EntityBullet";
					break;
					case(1):
						this.activeWeapon = "EntityGrenade";
					break;
				}
				this.setupAnimation(this.weapon);
			}
			//set the current animation, based on the player's speed
			if(this.swimming == true){
				this.currentAnim = this.anims.swim;
			}
			else if(this.climbing == true){
				this.currentAnim = this.anims.climb;
			}
			else if(this.flying == true){
				this.currentAnim = this.anims.fly;
			}
			else if(this.vel.y < 0){
				this.currentAnim = this.anims.jump;
			}else if(this.vel.y > 0){
				this.currentAnim = this.anims.fall;
			}else if(this.vel.x != 0){
				this.currentAnim = this.anims.run;
			}else{
				this.currentAnim = this.anims.idle;
			}
			this.currentAnim.flip.x = this.flip;
			
			//move
		//	ig.input.clearPressed();//Fixes problem of player constantly moving, but limits movement
			if(this.invincibleTimer.delta() > this.invincibleDelay){
				this.invincible =  false;
				this.currentAnim.alpha = 1;
			}
			this.parent();
			
		},
		
		makeInvincible: function(){
			this.invincible = true;
			this.invincibleTimer.reset();
		},
		receiveDamage: function(amount, from){
			if(this.invincible)
				return;
			this.parent(amount, from);
		},
		draw: function(){
			if(this.invincible)
				this.currentAnim.alpha = this.invincibleTimer.delta()/this.invincibleDelay * 1;
			this.parent();
		},
		kill: function(){
			if(ig.game.mute == false)
				this.deathSFX.play();
			this.parent();
			ig.game.respawnPosition = this.startPosition;
			ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {callBack:this.onDeath});
			
		},
		onDeath: function(){
			ig.game.stats.deaths ++;
			ig.game.lives --;
			this.swimming = false;
		//	this.swinging = false;
			this.climbing = false;
			ig.game.gravity = 300;
			this.size = {x: 18, y: 48};
			this.offset = {x: 18, y: 2};
			this.accel.y = 0;
			this.maxVel.y = 150;
			if(ig.game.lives < 0){
				ig.game.gameOver();
			}else{
				ig.game.spawnEntity(EntityPlayer, ig.game.respawnPosition.x, ig.game.respawnPosition.y);
			}
		},
		swim: function(){
			this.swimming = true;
			ig.game.gravity = 0;
			this.size.x = 48;
			this.size.y = 18;
			this.offset = {x: 2, y: 18};
		},
		fly: function(){
			this.flying = true;
			ig.game.gravity = 50;
		},
		land: function(){
			this.swimming = false;
		//	this.swinging = false;
			this.climbing = false;
			ig.game.gravity = 300;
			this.size = {x: 18, y: 48};
			this.offset = {x: 18, y: 2};
			this.accel.y = 0;
			this.maxVel.y = 150;
		},
		climb: function(){
			ig.game.gravity = 0;
			this.climbing = true;
			this.maxVel.y = 60;
		},
		getKey: function(){
			this.hasKey = true;
		},
		swing: function(other){
			this.rope = other;
			if(this.swinging==false){
				this.baseX = this.rope.pos.x;
				this.baseY = this.rope.pos.y;
			}
			this.swinging = true;
		//	this.radians = (this.theta*Math.PI)/180;
		//	this.pos.x = this.baseX - this.r*Math.sin(this.rope.angle);
		//	this.pos.y = this.baseY + this.r*Math.cos(this.rope.angle);
			
			
			
		//	this.update();
		//	this.parent();
		}
		
	});
	EntityBullet = ig.Entity.extend({
		size: {x: 12, y: 13},
		animSheet: new ig.AnimationSheet('media/pellets.png', 12, 13),
		maxVel: {x: 200, y: 0},
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.PASSIVE,
		
		init: function(x, y, settings){
			this.parent(x + (settings.flip ? -4 : 8), y+8, settings);
			this.vel.x = this.accel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
			this.addAnim('idle', 0.2, [0]);
		},
		
		handleMovementTrace: function(res){
			this.parent(res);
			if(res.collision.x || res.collision.y){
				this.kill();
			}
		},
		
		check: function(other){
			other.receiveDamage(8, this);
			this.kill();
		}
	});
	EntityGrenade = ig.Entity.extend({
		size: {x: 4, y: 4},
		offset: {x: 2, y: 2},
		animSheet: new ig.AnimationSheet('media/grenade.png', 8, 8),
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.BOTH,
		collides: ig.Entity.COLLIDES.PASSIVE,
		maxVel: {x: 200, y: 200},
		bounciness: 0.6,
		bounceCounter: 0,
		
		init: function(x, y, settings){
			this.parent(x + (settings.flip ? -4 : 7), y, settings);
			this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
			this.vel.y = -(50 + (Math.random()*100));
			this.addAnim('idle', 0.2, [0,1]);
		},
		
		handleMovementTrace: function(res){
			this.parent(res);
			if(res.collision.x || res.collision.y){
				//only bounce 3 times
				this.bounceCounter++;
				if(this.bounceCounter > 3){
					this.kill();
				}
			}
		},
		
		check: function(other){
			other.receiveDamage(10, this);
			this.kill();
		},

		kill: function(){
            for(var i = 0; i < 20; i++)
                ig.game.spawnEntity(EntityGrenadeParticle, this.pos.x, this.pos.y);
            this.parent();
        },
		
	});
	EntityDeathExplosion = ig.Entity.extend({
		lifetime: 1,
		callBack: null,
		particles: 25,
		init: function(x, y, settings){
			this.parent(x, y, settings);
			for(var i=0; i<this.particles; i++)
				ig.game.spawnEntity(EntityDeathExplosionParticle, x, y,
				{colorOffset: settings.colorOffset ? settings.colorOffset : 0});
				this.idleTimer = new ig.Timer();
		},
		update: function(){
			if(this.idleTimer.delta() > this.lifetime){
				this.kill();
				if(this.callBack)
					this.callBack();
				return;
			}
		}
	});
	EntityDeathExplosionParticle = ig.Entity.extend({
		size: {x: 2, y: 2},
		maxVel: {x: 160, y: 200},
		lifetime: 2,
		fadetime: 1,
		bounciness: 0,
		vel: {x: 100, y: 30},
		friction: {x: 100, Y: 0},
		collides: ig.Entity.COLLIDES.LITE,
		colorOffset: 0,
		totalColors: 7,
		animSheet: new ig.AnimationSheet('media/blood.png', 2, 2),
		init: function(x, y, settings){
			this.parent(x, y, settings);
			var frameID = Math.round(Math.random()*this.totalColors) + (this.colorOffset *(this.totalColors+1));
			this.addAnim('idle', 0.2, [frameID]);
			this.vel.x = (Math.random()*2-1)*this.vel.x;
			this.vel.y = (Math.random()*2-1)*this.vel.y;
			this.idleTimer = new ig.Timer();
		},
		update: function(){
			if(this.idleTimer.delta() > this.lifetime){
				this.kill();
				return;
			}
			this.currentAnim.alpha = this.idleTimer.delta().map(
				this.lifetime - this.fadetime, this.lifetime, 1, 0);
				this.parent();
		},
	});
	EntityGrenadeParticle = ig.Entity.extend({
		size: {x: 1, y: 1},
		maxVel: {x: 160, y: 200},
		lifetime: 1,
		fadetime: 1,
		bounciness: .3,
		vel: {x: 40, y: 50},
		friction: {x: 20, Y: 20},
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.LITE,
		animSheet: new ig.AnimationSheet('media/explosion.png', 1, 1),
		init: function(x, y, settings){
			this.parent(x, y, settings);
			this.vel.x = (Math.random()*4-1)*this.vel.x;
			this.vel.y = (Math.random()*10-1)*this.vel.y;
			this.idleTimer = new ig.Timer();
			var frameID = Math.round(Math.random()*7);
			this.addAnim('idle', 0.2, [frameID]);
		},
		update: function(){
			if(this.idleTimer.delta() > this.lifetime){
				this.kill();
				return;
			}
			this.currentAnim.alpha = this.idleTimer.delta().map(
				this.lifetime - this.fadetime, this.lifetime, 1, 0);
				this.parent();
		},
	});
});