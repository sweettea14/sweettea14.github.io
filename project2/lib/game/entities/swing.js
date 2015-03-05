ig.module(
	'game.entities.swing'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntitySwing = ig.Entity.extend({
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(255, 0, 0, 0.5)',
		_wmScalable: true,
		rope: null,

		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A,
			
		update: function(){},
		
		check: function(other){
			if(other instanceof EntityPlayer)
				other.swing(this.rope);
			else if(this.rope == null && other instanceof EntityVine)
				this.rope = other;
		}
	});
});