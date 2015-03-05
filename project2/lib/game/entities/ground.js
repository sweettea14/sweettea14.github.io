ig.module(
	'game.entities.ground'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityGround = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/rope.png', 5, 50),
		//	anim: new ig.Animation(animSheet, 1, [0]),
			size: {x: 5, y: 50},
			offset: {x: 1, y: 0},
			maxVel: {x: 100, y: 100},
			flip: false,
			_wmDrawBox: true,
			_wmBoxColor: 'rgba(255, 0, 0, 0.5)',
			_wmScalable: true,
			type: ig.Entity.TYPE.NONE,
			checkAgainst: ig.Entity.TYPE.A,
			
			init: function(x, y, settings){
				this.parent(x, y, settings);
				this.addAnim('walk', 1, [0]);
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
		
			check: function(other){
				other.land();
			},
	});
});