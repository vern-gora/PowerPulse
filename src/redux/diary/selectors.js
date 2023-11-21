export const selectConsumedFood = state => state.diary.data.consumedProduct;

export const selectDoneExercise = state => state.diary.data.exerciseDone;

export const selectCurrentData = state => state.diary.currentData;

export const selectIsLoadingProducts = state => state.diary.isLoadingProducts;

export const selectIsLoadingExercises = state => state.diary.isLoadingExercise;

export const selectError = state => state.diary.error;

export const selectDailyCalorieIntake = state => state.auth.user.bmr;

export const selectDailyPhysicalActivity = state =>
  state.auth.user.dailyExerciseTime;

export const getConsumedProducts = state => state.data.getConsumedProduct;
