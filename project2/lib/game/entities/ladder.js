ig.module(
	'game.entities.ladder'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityLadder = ig.Entity.extend({
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 255, 0, 0.5)',
		_wmScalable: true,

		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A,
			
		update: function(){},
		
		check: function(other){
			other.climb();
		}
	});
});