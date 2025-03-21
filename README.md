# Pokémon Web Game

A web-based Pokémon game that replicates the core features and gameplay mechanics of classic Pokémon GBA games, built using HTML5, CSS, and JavaScript with Phaser.js.

## Features

- Title screen and main menu
- World map exploration
- Turn-based battle system
- Pokémon capture and team management
- NPC interactions and storyline
- Inventory system
- Responsive design
- Save/load functionality

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:1234`

## Controls

- Arrow keys: Move the player character
- Space/Enter: Interact with NPCs, confirm selections
- ESC: Open menu
- Z: Back/Cancel

## Project Structure

```
pokemon-main/
    ├── README.md
    ├── package.json
    ├── public/
    │   └── assets/
    │       └── cursor.png
    └── src/
        ├── index.html
        ├── index.js
        ├── styles.css
        ├── assets/
        │   ├── images/
        │   ├── sprites/
        │   ├── grass.png
        │   ├── player.png
        │   ├── pokemart.png
        │   └── pokeshopscene.webp
        ├── components/
        │   ├── ActionMenu.js
        │   ├── PartyDisplay.js
        │   ├── trainercard.css
        │   └── trainercard/
        ├── config/
        │   ├── game-config.js
        │   ├── game-state.js
        │   ├── moves.js
        │   ├── pokemon-back-sprites.js
        │   ├── pokemon-data.js
        │   ├── pokemon-sprites.js
        │   ├── pokemon-types.js
        │   └── webpack.config.js
        ├── scenes/
        │   ├── bagmenu/
        │   │   ├── handlers/
        │   │   │   ├── ActionMenuHandler.js
        │   │   │   ├── ButtonHintsHandler.js
        │   │   │   ├── CategoryNavigationHandler.js
        │   │   │   ├── ItemListNavigationHandler.js
        │   │   │   ├── ItemsHandler.js
        │   │   │   ├── NavigationHandler.js
        │   │   │   ├── RegisterItemHandler.js
        │   │   │   └── TossConfirmationHandler.js
        │   │   ├── BagMenuCategories.js
        │   │   ├── BagMenuInput.js
        │   │   ├── BagMenuItems.js
        │   │   ├── BagMenuUI.js
        │   │   └── index.js
        │   ├── shopmenu/
        │   │   ├── ShopMenuInput.js
        │   │   ├── ShopMenuItems.js
        │   │   ├── ShopMenuTransactions.js
        │   │   ├── ShopMenuUI.js
        │   │   └── index.js
        │   ├── storage/
        │   │   ├── BoxUI.js
        │   │   ├── PokemonCreator.js
        │   │   ├── PokemonStorageScene.js
        │   │   └── SamplePokemon.js
        │   ├── BagScene.js
        │   ├── BattleScene.js
        │   ├── BootScene.js
        │   ├── InGameMenuScene.js
        │   ├── MenuScene.js
        │   ├── PartyScene.js
        │   ├── PokedexScene.js
        │   ├── PokemonCenterScene.js
        │   ├── pokemoncenterscenefinal.html
        │   ├── PokemonStorageScene.js
        │   ├── PokeShopScene.js
        │   ├── ShopMenuScene.js
        │   ├── SummaryScene.js
        │   ├── TitleScene.js
        │   ├── TrainerCardScene.js
        │   └── WorldScene.js
        ├── services/
        │   └── database.js
        └── utils/
            └── moveInitializer.js
```

## Development

The game is built using Phaser.js, a powerful 2D game framework. The codebase is organized into modular components and scenes for better maintainability.

## License

This project is for educational purposes only. Pokémon and all related media are property of The Pokémon Company, Nintendo, and Game Freak. #   p o k e m o n - m a i n 
 