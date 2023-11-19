export const selectConsumedFood = state => state.diary.data.consumedProduct;

export const selectDoneExercise = state => state.diary.data.exerciseDone;

export const selectCurrentData = state => state.diary.currentData;

export const selectIsLoading = state => state.diary.isLoading;

export const selectError = state => state.diary.error;

export const selectDailyCalorieIntake = state => state.auth.user.bmr;

export const selectDailyPhysicalActivity = state => state.auth.user.dailyExerciseTime;

export const getConsumedProducts = state => state.data.getConsumedProduct;
