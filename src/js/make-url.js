export const urlInfo = {
    BASE_URL: 'https://pixabay.com/api',
    KEY: '29344035-fb655b45173784dd0e4c03214',
    perPage: '40',
    currentPage: 1,
    category: '',

}


export function makeURL(urlInfo) {
    const { BASE_URL, KEY, perPage, currentPage, category } = urlInfo;
    return `${BASE_URL}/?key=${KEY}&q=${category}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`

}

