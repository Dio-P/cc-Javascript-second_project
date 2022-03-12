const baseURL = 'http://127.0.0.1:5000/api/battlefields/';





export const getBattlefields = () => {
    const result = fetch(baseURL)
    .then(res => res.json())

    return result

};
