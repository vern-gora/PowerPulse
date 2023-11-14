export const selectIsLoggedIn = state => state.info.auth.isLoggedIn;

export const selectUser = state => state.info.auth.user;

export const selectIsRefreshing = state => state.info.auth.isRefreshing;

export const selectGoToParams = state => state.info.auth.goToParams;
