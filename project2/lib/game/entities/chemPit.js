ig.module(
	'game.entities.chemPit'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityChemPit = ig.Entity.extend({
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(255, 0, 0, 0.5)',
		_wmScalable: true,
	//	type: ig.Entity.TYPE.NONE,
	
	//	checkAgainst: ig.Entity.TYPE.BOTH
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.B,
			
		update: function(){},
		
		check: function(other){
			other.kill();
		}
	});
});