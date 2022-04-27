export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(api, categoryId, query) {
  let url = '';

  switch (api) {
  case 'categorie':
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    break;
  case 'catQuery':
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    break;
  default:
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }

  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}
