const getProducts = state => state.products.productList;
const getIsLoading = state => state.products.isLoading;
const getProductsCategories = state => state.products.productsCategories;
const getFilter = state => state.products.filter;
const getCurrentProduct = state => state.products.currentProduct;
const getFilteredProducts = state => state.products.filteredProducts;

const productsSelectors = {
  getProducts,
  getIsLoading,
  getProductsCategories,
  getFilter,
  getCurrentProduct,
  getFilteredProducts,
};

export default productsSelectors;
