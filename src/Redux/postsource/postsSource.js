let catPosts;
async function getData(url = '') {
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

getData('https://www.reddit.com/r/cats.json')
.then(response => catPosts = response)
.then(() => console.log(catPosts))

export { catPosts };

