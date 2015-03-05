ig.module(
	'game.entities.tyler'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityTyler = ig.Entity.extend({
	animSheet: new ig.AnimationSheet('media/npc.png', 50, 50),
	size: {x: 30, y: 50},
	offset: {x: 1, y: 0},
	maxVel: {x: 100, y: 100},
	flip: false,
	friction: {x: 150, y: 0},
	speed: 14,
	health: 20,
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	init: function(x, y, settings){
		this.parent(x, y, settings);
		this.addAnim('walk', .1, [0,1,2,3]);
	},
	update: function(){
		//near an edge? return!
		if(!ig.game.collisionMap.getTile(this.pos.x + (this.flip ? +4 : this.size.x -4), 
			this.pos.y + this.size.y+1)
			){
				this.flip = !this.flip;
			}
			var xdir = this.flip ? -1 : 1;
		//	this.vel.x = this.speed * xdir;
			this.currentAnim.flip.x = this.flip;
			this.parent();
	},
	
	handleMovementTrace: function(res){
		this.parent(res);
		//collision with a wall? return!
		if(res.collision.x){
			this.flip = !this.flip;
		}
	},
	
	check: function(other){
	//	other.receiveDamage(10, this);
		other.getKey();
	},
	
	receiveDamage: function(value){
		this.parent(value);
	//	if(this.health > 0)
	//		ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y,
	//		{particles: 2, colorOffset: 1});
	},
	
	kill: function(){
		this.parent();
	//	ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y,{colorOffset: 1});
	//	ig.game.stats.kills ++;
	}
	
	});
});