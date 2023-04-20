// import './css/styles.css';

// const DEBOUNCE_DELAY = 300;
app.engine('html', require('hbs').__express);
import articlesTPL from './templates/articles.hbs';
import NewsApiService from './js/news-servise.js';
app.set('view engine', 'html');


const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
    e.preventDefault();
    
    clearArticleContainer();
    newsApiService.query = e.currentTarget.elements.query.value;
    newsApiService.resetPage();
  newsApiService.fetchArticles().then(appendArticleMarkup);
}

function onLoadMore() {
  newsApiService.fetchArticles().then(appendArticleMarkup);
}

function appendArticleMarkup(articles) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTPL(articles));
}

function clearArticleContainer(articles) {
  refs.articlesContainer.innerHTML = '';
}

