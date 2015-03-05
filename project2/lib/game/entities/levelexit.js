ig.module(
	'game.entities.levelexit'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityLevelexit = ig.Entity.extend({
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 0, 255, 0.7)',
		size: {x: 8, y: 8},
		level: null,
		levelName: null,
		checkAgainst: ig.Entity.TYPE.A,
		initialSpaceLoad: false,
		
		update: function(){},
		
		check: function(other) {
			
		//	if (other instanceof EntityPlayer) {
			if(this.levelName=='Space'){
				if(ig.game.hasKey==true){
					ig.game.toggleStats(this);
				}
			}
			else{
				ig.game.toggleStats(this);
			}
		//	}
				
        /*	if (other instanceof EntityPlayer) {
        		ig.game.toggleStats(this);
        	}*/
        },
		
        nextLevel: function(){
        	if (this.level) {
        		this.levelName = this.level.replace(/^(Level)?(\w)(\w*)/, function(m, l, a, b) {
					return a.toUpperCase() + b;
				});
				if(this.levelName=='Cave' || this.levelName=='Outside' || this.levelName=='OverWorld'){
				//	if(ig.game.entities.player.hasKey==true){
					if(this.levelName=='Cave'){
						initialSpaceLoad=true;
					}
					
						ig.game.loadLevelDeferred(ig.global['Level' + this.levelName]);
				//	}	
				}
				else if(this.levelName=='Space'){
					
					if(initialSpaceLoad==true){
						if(ig.game.hasKey==true){
							initialSpaceLoad=false;
							ig.game.loadLevelDeferred(ig.global['Level' + 'OverWorld']);
						}
					}
					
					else{
						ig.game.loadLevelDeferred(ig.global['Level' + this.levelName]);
					}
				}
				else if(this.levelName=='Win'){
					ig.game.gameWin();
				}
        	}
        }
	});
});