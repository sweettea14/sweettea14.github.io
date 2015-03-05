ig.module(
	'game.entities.land'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityLand = ig.Entity.extend({
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(255, 0, 0, 0.5)',
		_wmScalable: true,

		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A,
			
		update: function(){},
		
		check: function(other){
			if(other instanceof EntityPlayer)
				other.land();
		}
	});
});