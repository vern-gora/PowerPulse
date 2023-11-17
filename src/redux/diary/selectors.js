export const selectConsumedFood = state => state.diary.data.consumedProduct;
export const selectDoneExercise = state => state.diary.data.exerciseDone;

export const selectCurrentData = state => state.diary.currentData;

export const selectIsLoading = state => state.diary.isLoading;

export const selectError = state => state.diary.error;

export const getConsumedProducts = state => state.data.getConsumedProduct;
