ig.module(
	'game.entities.topSprite'
)
.requires(
	'impact.entity'
//	'plugins.joncom.box2d.entity'
)
.defines(function(){
	EntityTopSprite = ig.Entity.extend({
	animSheet: new ig.AnimationSheet('media/topSprite.png', 25, 25),
	size: {x: 22, y: 17},
	offset: {x: 2, y: 4},
	maxVel: {x: 100, y: 100},
	flip: false,
	friction: {x: 150, y: 0},
	accelGround: 400,
	accelAir: 200,
	speed: 14,
	health: 20,
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.PASSIVE,
	flying: true,
	gravityFactor: 0,
	
	init: function(x, y, settings){
		this.parent(x, y, settings);
		this.addAnim('right', 1, [0]);
		this.addAnim('up', 1, [1]);
		this.addAnim('left', 1, [2]);
		this.addAnim('down', 1, [3]);
	},
	update: function(){
			//move left or right
			var accel = this.standing ? this.accelGround : this.accelAir;
			if(ig.input.state('left')){
				this.accel.x = -accel;
				this.flip = true;
				this.currentAnim = this.anims.left;
			}else if(ig.input.state('right')){
				this.accel.x = accel;
				this.flip = false;
				this.currentAnim = this.anims.right;
			}else{
				this.accel.x = 0;
			}
			
			if(this.flying==true){//Flying
				if(ig.input.state('up')){
					this.accel.y = -100;
					this.currentAnim = this.anims.up;
				}
				else if(ig.input.state('down')){
					this.accel.y = 100;
					this.currentAnim = this.anims.down;
				}
				else{
					this.accel.y = 0;
					}
			}
			
			
			this.parent();
			
		},
	
	handleMovementTrace: function(res){
		this.parent(res);
		//collision with a wall? return!
	//	if(res.collision.x){
	//		this.flip = !this.flip;
	//	}
	},
	
	check: function(other){
		other.receiveDamage(10, this);
	},
	
	receiveDamage: function(value){
		this.parent(value);
		if(this.health > 0)
			ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y,
			{particles: 2, colorOffset: 1});
	},
	
	kill: function(){
		this.parent();
		ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y,{colorOffset: 1});
		ig.game.stats.kills ++;
	}
	
	});
});