// Logger utility for trainer card
export const logTrainerCard = (message, data) => {
    console.log(`[TrainerCard] ${message}`, data || '');
};

// Error logger utility for trainer card
export const logTrainerCardError = (message, error) => {
    console.error(`[TrainerCard] ERROR: ${message}`, error || '');
};