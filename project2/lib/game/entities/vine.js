ig.module(
	'game.entities.vine'
)
.requires(
	'impact.entity'
//	'plugins.joncom.box2d.entity'
)
.defines(function(){
	EntityVine = ig.Entity.extend({
			animSheet: new ig.AnimationSheet('media/rope.png', 5, 150),
		//	anim: new ig.Animation(animSheet, 1, [0]),
			size: {x: 100, y: 150},
			offset: {x: -50, y: 0},
			//maxVel: {x: 100, y: 100},
			flip: false,
			gravityFactor: 0,
			swingLeft: false,
			theta: 45,
			radians: 0,
			type: ig.Entity.TYPE.A,
		//	checkAgainst: ig.Entity.TYPE.A,
			collides: ig.Entity.COLLIDES.PASSIVE,
			
			init: function(x, y, settings){
				this.parent(x, y, settings);
				this.addAnim('swing', .005, [0]);
				this.currentAnim.pivot.x += 3;
				this.currentAnim.pivot.y -= this.size.y/2;
				this.radians = (this.theta*Math.PI)/180;
				
				this.currentAnim.angle = this.radians;
			},
			
			update: function(){
				//near an edge? return!
				this.radians = (this.theta*Math.PI)/180;
				
				this.currentAnim.angle = this.radians;
			//	this.currentAnim.update();
				if(this.swingLeft == false){
					this.theta -=1.5;
				//	this.anims.swing.update();
					if(this.theta <= -50){
						this.swingLeft = true;
					}
				}
				else if(this.swingLeft == true){
					this.theta +=1.5;
				//	this.anims.swing.update();
					if(this.theta >= 50){
						this.swingLeft = false;
					}
				}
		/*		if(!ig.game.collisionMap.getTile(this.pos.x + (this.flip ? +4 : this.size.x -4), 
					this.pos.y + this.size.y+1)
					){
						this.flip = !this.flip;
					}
					var xdir = this.flip ? -1 : 1;
				//	this.vel.x = this.speed * xdir;
					this.currentAnim.flip.x = this.flip;*/
					this.parent();
			},
		
			check: function(other){
			//	other.land();
			},
	});
});