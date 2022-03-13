import {battleNodes} from '../'
const baseURL = 'http://127.0.0.1:5000/api/battlefields/';


export const getBattlefields = () => {
    const result = fetch(baseURL)
    .then(res => res.json())

    return result

};

// using fixed URL to test - response currently null
//ERROR - "Access to fetch at 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Battle%20of%20Barnet%201471&format=json' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled."
// SOLVED -> ADD &ORIGIN=* TO SEARCH COMMAND
export const getWikiEntry = () => {
    const result = fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Battle%20of%20Barnet%201471&format=json&origin=* ')
    .then(res => res.json())

    return result
}

export const QuerySearch = () => {var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "prefixsearch",
    pssearch: "battle of Adwalton",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.prefixsearch;
        for (var page in pages) {
            console.log( pages[page].title );
        }
    })
    .catch(function(error){console.log(error);});}