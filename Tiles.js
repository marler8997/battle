
// the size of a tile in game units
var TILE_GAME_SIZE = 32;
// the number of pixels in a tile
var TILE_PIXEL_SIZE = 32;

// The TileID is also the tile position in the tileset image
var TileID = {
    player: 0,
    block : 4,
    topGround: 8,
    midGround: 9,
};
var TILE_SET_COLUMN_COUNT = 4;
var TILE_SET_ROW_COUNT = 4;

var tileInfos = new Array(TILE_SET_COLUMN_COUNT * TILE_SET_ROW_COUNT);
tileInfos[TileID.player] = {collision:true};
tileInfos[TileID.block] = {collision:true};
tileInfos[TileID.topGround] = {collision:true};
tileInfos[TileID.midround] = {collision:true};
