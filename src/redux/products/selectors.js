const getProducts = state => state.info.products.productList;
const getIsLoading = state => state.info.products.isLoading;
const getProductsCategories = state => state.info.products.productsCategories;
const getFilter = state => state.info.products.filter;
const getCurrentProduct = state => state.info.products.currentProduct;

const productsSelectors = {
  getProducts,
  getIsLoading,
  getProductsCategories,
  getFilter,
  getCurrentProduct,
};

export default productsSelectors;
