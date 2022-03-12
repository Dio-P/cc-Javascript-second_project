const baseURL = 'http://127.0.0.1:5000/api/battlefields/';


export const getBattlefields = () => {
    const result = fetch(baseURL)
    .then(res => res.json())

    return result

};

export const getWikiEntry = () => {
    const result = fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Battle%20of%20Barnet%201471&format=json ')
    .then(res => res.json())

    return result
}