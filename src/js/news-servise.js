export default class NewsApiService {
  constructor() {
      this.searchQuery = '';
      this.page = 1;
  }

    fetchArticles() {
        console.log('до', this);
    const options = {
      headers: {
        Authorization: '1035db632b644301ba21f4d60cd9087b',
      },
    };
    let url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=5&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();

        return data.articles;
      });
    }
  
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}