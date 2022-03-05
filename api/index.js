import token from './../config/token'


//frontend/utils.js
const baseUrl = 'http://localhost:1337/api/';

const routes = {
    getArticles: 'articles',
    getArticleById: 'article',

    getServices: 'services',
    getServiceById: 'service',
}

async function fetchQuery(path, params = null) {
    let url

    if (params !== null) {
        url = `${baseUrl}/${path}/${params}`
    } else {
        url = `${baseUrl}/${path}`
    }

    const res = await axios.get(url, {
        }).then(res => {
            if (res.status == 200) {
                return res.json ? res.json() : res
            }

            return null
        }).then(data => {
            return data
        })

    return res
}
export { baseUrl, fetchQuery, routes }