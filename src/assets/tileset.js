// GBA-style tileset definitions for the Pokémon overworld

// Tileset configuration for a GBA-style Pokémon game
const TILESETS = {
    // Basic terrain tiles
    TERRAIN: {
        GRASS: { key: 'grass_tile', frame: 0 },
        TALL_GRASS: { key: 'tall_grass', frame: 0, animated: true, frames: 4 },
        PATH: { key: 'path_tile', frame: 0 },
        SAND: { key: 'sand_tile', frame: 0 },
        WATER: { key: 'water_tile', frame: 0, animated: true, frames: 4 },
        LEDGE: { key: 'ledge_tile', frame: 0 },
    },
    
    // Building and structure tiles
    BUILDINGS: {
        POKEMON_CENTER: {
            ROOF: { key: 'center_roof', frame: 0 },
            WALLS: { key: 'center_walls', frame: 0 },
            DOOR: { key: 'center_door', frame: 0, animated: true, frames: 2 },
        },
        POKE_MART: {
            ROOF: { key: 'mart_roof', frame: 0 },
            WALLS: { key: 'mart_walls', frame: 0 },
            DOOR: { key: 'mart_door', frame: 0, animated: true, frames: 2 },
        },
        HOUSE: {
            ROOF: { key: 'house_roof', frame: 0 },
            WALLS: { key: 'house_walls', frame: 0 },
            DOOR: { key: 'house_door', frame: 0 },
        },
    },
    
    // Decorative elements
    DECORATIVE: {
        TREE: { key: 'tree_tile', frame: 0 },
        FLOWER: { key: 'flower_tile', frame: 0, animated: true, frames: 2 },
        ROCK: { key: 'rock_tile', frame: 0 },
        SIGN: { key: 'sign_tile', frame: 0 },
        FENCE: { key: 'fence_tile', frame: 0 },
    },
    
    // Route elements
    ROUTE: {
        SIGN: { key: 'route_sign', frame: 0 },
        TALL_GRASS_PATCH: { key: 'tall_grass_patch', frame: 0 },
    }
};

// GBA color palette for authentic look
const GBA_PALETTE = {
    // Standard GBA colors
    GRASS_GREEN: 0x58B848,
    TREE_GREEN: 0x389800,
    PATH_BROWN: 0xB89858,
    WATER_BLUE: 0x3890F8,
    ROOF_RED: 0xF85858,
    MART_BLUE: 0x3898F8,
    SAND_YELLOW: 0xF8D898,
    
    // Building colors
    POKECENTER_PINK: 0xF868B8,
    POKEMART_BLUE: 0x4878F8,
    
    // UI colors
    UI_LIGHT_BLUE: 0x6890F0,
    UI_DARK_BLUE: 0x3860E0,
    TEXT_BLACK: 0x303030,
    TEXT_WHITE: 0xF8F8F8,
};

// Tile size configuration
const TILE_CONFIG = {
    SIZE: 32,         // Size of each tile in pixels
    GRID_WIDTH: 25,   // Number of tiles horizontally in the world
    GRID_HEIGHT: 19,  // Number of tiles vertically in the world
    LAYER_COUNT: 3,   // Number of layers (ground, decoration, above player)
};

// Animation configuration for tiles
const ANIMATIONS = {
    WATER: {
        frameRate: 4,
        repeat: -1,
        frames: [0, 1, 2, 3]
    },
    TALL_GRASS: {
        frameRate: 8,
        repeat: 0,  // Only plays when stepped on
        frames: [0, 1, 2, 1, 0]
    },
    FLOWER: {
        frameRate: 1,
        repeat: -1,
        frames: [0, 1]
    },
    DOOR: {
        frameRate: 8,
        repeat: 0,
        frames: [0, 1]
    }
};

export { TILESETS, GBA_PALETTE, TILE_CONFIG, ANIMATIONS };