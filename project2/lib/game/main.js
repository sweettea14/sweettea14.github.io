ig.module( 
	'game.main' 
)
.requires(
//	'plugins.joncom.box2d.game',
 //   'plugins.joncom.box2d.debug',
	'impact.game',
	'game.levels.dorm1',
	'game.levels.dorm2',
	'game.levels.dorm3',
	'game.levels.outside',
	'game.levels.cave',
	'game.levels.space',
	'game.levels.overWorld',
	'impact.font',
	'impact.timer',
	'impact.debug.debug'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	gravity: 300,
	instructText: new ig.Font('media/04b03.font.png'),
	statText: new ig.Font('media/04b03.font.png'),
	showStats: false,
	statMatte: new ig.Image('media/stat-matte.png'),
	levelTimer: new ig.Timer(),
	levelExit: null,
	stats: {time: 0, kills: 0, deaths: 0},
	lives: 3,
	hasKey: false,
	lifeSprite: new ig.Image('media/life-sprite2.png'),
	keySprite: new ig.Image('media/key.png'),
	mute: false,
	outside: new ig.Sound('media/sounds/brightOpen.*', false),
	cave: new ig.Sound('media/sounds/darkCave.*', false),
	boss: new ig.Sound('media/sounds/bossDark.*', false),
	
	init: function() {
	//	ig.music.tracks[];
	
		ig.music.add(this.outside, 'outside');
		ig.music.add(this.outside, 'outside');
		ig.music.add(this.cave, 'cave');
		ig.music.add(this.cave, 'cave');
		ig.music.add(this.boss, 'boss');
		ig.music.add(this.boss, 'boss');
		ig.music.loop = true;
		ig.music.volume = 1;
		ig.music.play();
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.UP_ARROW, 'up');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind(ig.KEY.X, 'jump');
		ig.input.bind(ig.KEY.C, 'shoot');
		ig.input.bind(ig.KEY.M, 'mute');
		ig.input.bind(ig.KEY.TAB, 'switch');
		ig.input.bind(ig.KEY.SPACE, 'continue');
		this.loadLevel(LevelOverWorld);
	},
	
	loadLevel: function( data ) {
        this.stats = {time: 0, kills: 0, deaths: 0};
    	this.parent(data);
        this.levelTimer.reset();
    },
    update: function() {
    	// screen follows the player
    	var player = this.getEntitiesByType( EntityPlayer )[0];
    	if( player ) {
    		this.screen.x = player.pos.x - ig.system.width/2;
    		this.screen.y = player.pos.y - ig.system.height/2;
			this.hasKey = player.hasKey;
            if(player.accel.x > 0 && this.instructText)
                this.instructText = null;
    	}
		var player2 = this.getEntitiesByType( EntityTopSprite )[0];
    	if( player2 ) {
    		this.screen.x = player2.pos.x - ig.system.width/2;
    		this.screen.y = player2.pos.y - ig.system.height/2;
			this.hasKey = player2.hasKey;
            if(player2.accel.x > 0 && this.instructText)
                this.instructText = null;
    	}
		if(ig.input.pressed('mute')){
			if(this.mute == false){
				ig.music.volume = 0;
				this.mute = true;
			}
			else if(this.mute == true){
				ig.music.volume = 1;
				this.mute = false;
			}
		}
    	// Update all entities and BackgroundMaps
        if(!this.showStats){
        	this.parent();
        }else{
            if(ig.input.state('continue')){
                this.showStats = false;
                this.levelExit.nextLevel();
				ig.music.next();//Maybe add in a way to change song to overworld without going in order
                this.parent();
            }
        }
    },
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
        if(this.instructText){
            var x = ig.system.width/2+15,
            y = 10;
            this.instructText.draw( 'Left/Right Moves, X Jumps, C Fires & Tab Switches Weapons.', x, y, ig.Font.ALIGN.CENTER );
        }
        if(this.showStats){
            this.statMatte.draw(0,0);
            var x = ig.system.width/2;
            var y = ig.system.height/2 - 20;
            this. statText.draw('Level Complete', x, y, ig.Font.ALIGN.CENTER);
            this. statText.draw('Time: '+this.stats.time, x, y+30, ig.Font.ALIGN.CENTER);
            this. statText.draw('Kills: '+this.stats.kills, x, y+40, ig.Font.ALIGN.CENTER);
            this. statText.draw('Deaths: '+this.stats.deaths, x, y+50, ig.Font.ALIGN.CENTER);
            this. statText.draw('Press Spacebar to continue.', x, ig.system.height - 10, ig.Font.ALIGN.CENTER);
        }
        this.statText.draw("Lives", 5,5);
        for(var i=0; i < this.lives; i++)
            this.lifeSprite.draw(((this.lifeSprite.width + 2) * i)+5, 15);
		if(this.hasKey==true){
			this.keySprite.draw(((this.keySprite.width)*4)+5, 15)
		}
	},
    toggleStats: function(levelExit){
        this.showStats = true;
        this.stats.time = Math.round(this.levelTimer.delta());
        this.levelExit = levelExit;
    },
	gameOver: function(){
		ig.finalStats = ig.game.stats;
		ig.system.setGame(GameOverScreen);
	},
	gameWin: function(){
		ig.finalStats = ig.game.stats;
		ig.system.setGame(GameWinScreen);
	}
});

if(ig.ua.mobile){
	ig.Sound.enabled = false;
}

StartScreen = ig.Game.extend({
	instructText: new ig.Font('media/04b03.font.png'),
//	background: new ig.Image('media/screen-bg.png'),
	background: new ig.Image('media/title.png'),
//	mainCharacter: new ig.Image('media/screen-main-character.png'),
//	title: new ig.Image('media/game-title.png'),
	init: function(){
		ig.input.bind(ig.KEY.SPACE, 'start');
		ig.music.stop();
	},
	update: function(){
		if(ig.input.pressed('start')){
			ig.system.setGame(MyGame)
		}
		this.parent();
	},
	draw: function(){
		this.parent();
		this.background.draw(0,0);
	//	this.mainCharacter.draw(0,0);
	//	this.title.draw(ig.system.width - this.title.width, 0);
		var x = ig.system.width/2,
		y = ig.system.height - 10;
		this.instructText.draw('Press Spacebar to Start', x+40, y, ig.Font.ALIGN.CENTER);
	}
});

GameOverScreen = ig.Game.extend({
    instructText: new ig.Font( 'media/04b03.font.png' ),
    background: new ig.Image('media/screen-bg.png'),
    gameOver: new ig.Image('media/game-over.png'),
    stats: {},
    init: function() {
        ig.input.bind( ig.KEY.SPACE, 'start');
        this.stats = ig.finalStats;
    },
    update: function() {
        if(ig.input.pressed('start')){
            ig.system.setGame(StartScreen)
        }
        this.parent();
    },
    draw: function() {
        this.parent();
        this.background.draw(0,0);
        var x = ig.system.width/2;
        var y = ig.system.height/2 - 20;
        this.gameOver.draw(x - (this.gameOver.width * .5), y - 30);
        var score = (this.stats.kills * 100) - (this.stats.deaths * 50);
        this.instructText.draw('Total Kills: '+this.stats.kills, x, y+30, ig.Font.ALIGN.CENTER);
        this.instructText.draw('Total Deaths: '+this.stats.deaths, x, y+40, ig.Font.ALIGN.CENTER);
        this.instructText.draw('Score: '+score, x, y+50, ig.Font.ALIGN.CENTER);
        this.instructText.draw('Press Spacebar To Continue.', x, ig.system.height - 10, ig.Font.ALIGN.CENTER);
    }
});

GameOverScreen = ig.Game.extend({
    instructText: new ig.Font( 'media/04b03.font.png' ),
    background: new ig.Image('media/loseBack.png'),
  //  gameOver: new ig.Image('media/game-over.png'),
    stats: {},
    init: function() {
        ig.input.bind( ig.KEY.SPACE, 'start');
        this.stats = ig.finalStats;
    },
    update: function() {
        if(ig.input.pressed('start')){
            ig.system.setGame(StartScreen)
        }
        this.parent();
    },
    draw: function() {
        this.parent();
        this.background.draw(0,0);
        var x = ig.system.width/2;
        var y = ig.system.height/2 - 20;
  //      this.gameOver.draw(x - (this.gameOver.width * .5), y - 30);
        var score = (this.stats.kills * 100) - (this.stats.deaths * 50);
        this.instructText.draw('Total Kills: '+this.stats.kills, x, y+30, ig.Font.ALIGN.CENTER);
        this.instructText.draw('Total Deaths: '+this.stats.deaths, x, y+40, ig.Font.ALIGN.CENTER);
        this.instructText.draw('Score: '+score, x, y+50, ig.Font.ALIGN.CENTER);
        this.instructText.draw('Press Spacebar To Continue.', x, ig.system.height - 10, ig.Font.ALIGN.CENTER);
    }
});

GameWinScreen = ig.Game.extend({
    instructText: new ig.Font( 'media/04b03.font.png' ),
    background: new ig.Image('media/winBack.png'),
    gameOver: new ig.Image('media/youWin.png'),
    stats: {},
    init: function() {
        ig.input.bind( ig.KEY.SPACE, 'start');
        this.stats = ig.finalStats;
    },
    update: function() {
        if(ig.input.pressed('start')){
            ig.system.setGame(StartScreen)
        }
        this.parent();
    },
    draw: function() {
        this.parent();
        this.background.draw(0,0);
        var x = ig.system.width/2;
        var y = ig.system.height/2 - 20;
        this.gameOver.draw(x - (this.gameOver.width * .5), y - 30);
        var score = (this.stats.kills * 100) - (this.stats.deaths * 50);
        this.instructText.draw('Total Kills: '+this.stats.kills, x, y+30, ig.Font.ALIGN.CENTER);
        this.instructText.draw('Total Deaths: '+this.stats.deaths, x, y+40, ig.Font.ALIGN.CENTER);
        this.instructText.draw('Score: '+score, x, y+50, ig.Font.ALIGN.CENTER);
        this.instructText.draw('Press Spacebar To Continue.', x, ig.system.height - 10, ig.Font.ALIGN.CENTER);
    }
});
// Start the Game with 60fps, a resolution of 320x240, scaled480x320
// up by a factor of 2
ig.main( '#canvas', StartScreen, 60, 320, 240, 2 );

});
