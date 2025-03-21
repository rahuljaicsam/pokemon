export const createBoxUI = (scene, x, y, boxNumber, pokemonList, onPokemonSelect) => {
    const boxContainer = scene.add.container(x, y);
    const boxBackground = scene.add.rectangle(0, 0, 400, 300, 0x000000, 0.7);
    boxContainer.add(boxBackground);

    // Box title
    const titleText = scene.add.text(0, -140, `Box ${boxNumber}`, {
        fontSize: '24px',
        fill: '#ffffff'
    }).setOrigin(0.5);
    boxContainer.add(titleText);

    // Grid of Pokémon slots
    const gridSize = 5;
    const slotSize = 60;
    const startX = -120;
    const startY = -100;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const slotX = startX + (j * slotSize);
            const slotY = startY + (i * slotSize);
            const index = i * gridSize + j;

            const slot = createPokemonSlot(scene, slotX, slotY, pokemonList[index], () => {
                if (onPokemonSelect) {
                    onPokemonSelect(pokemonList[index]);
                }
            });
            boxContainer.add(slot);
        }
    }

    return boxContainer;
};

const createPokemonSlot = (scene, x, y, pokemon, onClick) => {
    const slotContainer = scene.add.container(x, y);
    
    // Slot background
    const background = scene.add.rectangle(0, 0, 50, 50, 0x333333);
    background.setInteractive();
    background.on('pointerdown', onClick);
    slotContainer.add(background);

    if (pokemon) {
        // Pokémon sprite
        const sprite = scene.add.sprite(0, 0, pokemon.key.toLowerCase());
        sprite.setScale(0.5);
        slotContainer.add(sprite);

        // Level indicator
        const levelText = scene.add.text(0, 20, `Lv.${pokemon.level}`, {
            fontSize: '12px',
            fill: '#ffffff'
        }).setOrigin(0.5);
        slotContainer.add(levelText);
    }

    return slotContainer;
}; 