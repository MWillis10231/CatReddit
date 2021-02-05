async function fetchCatData () {
    await fetch('https://www.reddit.com/r/cats.json')
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json())
}

export default fetchCatData;
    