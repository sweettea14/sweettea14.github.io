ig.module( 'game.levels.dorm2' )
.requires( 'impact.image','game.entities.player','game.entities.levelexit' )
.defines(function(){
LevelDorm2=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 36,
			"y": 66
		},
		{
			"type": "EntityLevelexit",
			"x": 180,
			"y": 72,
			"settings": {
				"level": "dorm3"
			}
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 14,
			"height": 6,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "main",
			"width": 14,
			"height": 6,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/dorm-tiles.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[5,5,5,5,5,5,5,5,5,5,5,5,5,5],
				[5,8,9,10,9,9,8,9,10,9,9,10,8,5],
				[5,7,7,7,7,7,7,7,7,7,7,7,7,5],
				[5,7,12,7,7,12,7,7,12,7,7,12,7,5],
				[5,22,24,22,22,24,22,22,24,22,22,24,22,5],
				[5,14,14,14,14,14,14,14,14,14,14,14,14,5]
			]
		}
	]
}/*]JSON*/;
LevelDorm2Resources=[new ig.Image('media/dorm-tiles.png')];
});