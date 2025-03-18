export const TYPES = {
    NORMAL: 'Normal',
    FIRE: 'Fire',
    WATER: 'Water',
    GRASS: 'Grass',
    ELECTRIC: 'Electric',
    ICE: 'Ice',
    FIGHTING: 'Fighting',
    POISON: 'Poison',
    GROUND: 'Ground',
    FLYING: 'Flying',
    PSYCHIC: 'Psychic',
    BUG: 'Bug',
    ROCK: 'Rock',
    GHOST: 'Ghost',
    DRAGON: 'Dragon',
    DARK: 'Dark',
    STEEL: 'Steel',
    FAIRY: 'Fairy'
};

export const TYPE_EFFECTIVENESS = {
    [TYPES.NORMAL]: {
        superEffective: [],
        notVeryEffective: [TYPES.ROCK, TYPES.STEEL],
        noEffect: [TYPES.GHOST]
    },
    [TYPES.FIRE]: {
        superEffective: [TYPES.GRASS, TYPES.ICE, TYPES.BUG, TYPES.STEEL],
        notVeryEffective: [TYPES.FIRE, TYPES.WATER, TYPES.ROCK, TYPES.DRAGON],
        noEffect: []
    },
    [TYPES.WATER]: {
        superEffective: [TYPES.FIRE, TYPES.GROUND, TYPES.ROCK],
        notVeryEffective: [TYPES.WATER, TYPES.GRASS, TYPES.DRAGON],
        noEffect: []
    },
    [TYPES.ELECTRIC]: {
        superEffective: [TYPES.WATER, TYPES.FLYING],
        notVeryEffective: [TYPES.ELECTRIC, TYPES.GRASS, TYPES.DRAGON],
        noEffect: [TYPES.GROUND]
    },
    [TYPES.GRASS]: {
        superEffective: [TYPES.WATER, TYPES.GROUND, TYPES.ROCK],
        notVeryEffective: [TYPES.FIRE, TYPES.GRASS, TYPES.POISON, TYPES.FLYING, TYPES.BUG, TYPES.DRAGON, TYPES.STEEL],
        noEffect: []
    },
    [TYPES.FLYING]: {
        superEffective: [TYPES.GRASS, TYPES.FIGHTING, TYPES.BUG],
        notVeryEffective: [TYPES.ELECTRIC, TYPES.ROCK, TYPES.STEEL],
        noEffect: []
    },
    [TYPES.BUG]: {
        superEffective: [TYPES.GRASS, TYPES.PSYCHIC, TYPES.DARK],
        notVeryEffective: [TYPES.FIRE, TYPES.FIGHTING, TYPES.POISON, TYPES.FLYING, TYPES.GHOST, TYPES.STEEL, TYPES.FAIRY],
        noEffect: []
    }
};

export const calculateDamageMultiplier = (attackType, defenderType) => {
    // Add safety check for undefined type effectiveness
    if (!TYPE_EFFECTIVENESS[attackType]) {
        console.warn(`[Types] No type effectiveness data for ${attackType}, defaulting to normal damage`);
        return 1;
    }

    if (TYPE_EFFECTIVENESS[attackType].superEffective.includes(defenderType)) {
        return 2;
    } else if (TYPE_EFFECTIVENESS[attackType].notVeryEffective.includes(defenderType)) {
        return 0.5;
    } else if (TYPE_EFFECTIVENESS[attackType].noEffect.includes(defenderType)) {
        return 0;
    }
    return 1;
}; 