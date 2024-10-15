const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528';

fetch(url)
  .then(response => {
    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
