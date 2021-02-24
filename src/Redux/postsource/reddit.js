const url = 'https://www.reddit.com/r/cats.json';

export const fetchCatData = async () => 
    await fetch(url)
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json())