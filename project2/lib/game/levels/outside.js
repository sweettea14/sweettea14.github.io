ig.module( 'game.levels.outside' )
.requires( 'impact.image','game.entities.player','game.entities.water','game.entities.land','game.entities.levelexit','game.entities.alien' )
.defines(function(){
LevelOutside=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 34,
			"y": 376
		},
		{
			"type": "EntityWater",
			"x": 100,
			"y": 424,
			"settings": {
				"size": {
					"x": 152,
					"y": 52
				}
			}
		},
		{
			"type": "EntityLand",
			"x": 92,
			"y": 364,
			"settings": {
				"size": {
					"x": 196,
					"y": 32
				}
			}
		},
		{
			"type": "EntityLand",
			"x": 268,
			"y": 380,
			"settings": {
				"size": {
					"x": 16,
					"y": 44
				}
			}
		},
		{
			"type": "EntityLand",
			"x": 92,
			"y": 368,
			"settings": {
				"size": {
					"x": 16,
					"y": 56
				}
			}
		},
		{
			"type": "EntityLevelexit",
			"x": 724,
			"y": 372,
			"settings": {
				"level": "overWorld"
			}
		},
		{
			"type": "EntityAlien",
			"x": 618,
			"y": 359
		},
		{
			"type": "EntityAlien",
			"x": 498,
			"y": 307
		},
		{
			"type": "EntityAlien",
			"x": 306,
			"y": 383
		}
	],
	"layer": [
		{
			"name": "background",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "p2-blocks.png",
			"repeat": false,
			"preRender": false,
			"distance": "2",
			"tilesize": 25,
			"foreground": false,
			"data": [
				[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0,0,0,0,0,0,0,0,0],
				[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0],
				[16,16,16,16,16,14,15,16,16,16,16,16,16,16,14,15,16,16,16,16,16,16,16,16,16,16,16,16,16,0],
				[16,16,16,16,16,16,16,16,14,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0],
				[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0],
				[16,16,16,16,16,16,16,16,16,16,16,16,14,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0],
				[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0],
				[16,16,16,16,14,15,16,16,16,16,16,14,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0],
				[16,16,16,16,16,16,16,14,15,16,16,16,16,14,15,16,16,16,16,16,16,16,16,16,16,16,16,16,0,0],
				[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0,0,0,0],
				[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0,0,0,0,0],
				[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0,0,0,0,0],
				[16,16,16,16,16,16,16,14,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0,0,0,0,0,0],
				[16,16,16,16,16,16,16,16,16,16,16,16,14,15,16,16,16,16,16,16,16,16,16,0,0,0,0,0,0,0],
				[16,16,16,16,16,14,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0,0,0,0,0,0,0,0],
				[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 35,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 25,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,1,1,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,1,0,13,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
				[1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
				[1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "main",
			"width": 40,
			"height": 25,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tileset.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 25,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,17,17,17,17,17,17,17,27,35,35,35,35,35,35,35,35,35,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,17,17,17,17,17,17,17,17,27,35,35,35,35,35,35,35,35,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,17,17,17,17,17,17,17,17,17,27,35,35,35,35,35,35,35,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,35,35,35,35,17,17,17,17,17,41,42,35,35,35,35,35,35,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,35,35,35,35,35,35,17,17,17,17,51,52,35,35,35,35,35,35,0,0,0,0],
				[35,5,5,8,0,0,0,0,0,0,5,6,7,4,4,0,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0],
				[2,2,2,2,9,9,9,9,9,9,2,2,2,2,3,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0],
				[32,32,32,32,10,10,10,10,10,10,32,32,32,32,32,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0],
				[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0],
				[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0],
				[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0,0],
				[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0,0,0,0],
				[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,0,0,0,0,0,0,0],
				[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelOutsideResources=[new ig.Image('p2-blocks.png'), new ig.Image('media/tileset.png')];
});