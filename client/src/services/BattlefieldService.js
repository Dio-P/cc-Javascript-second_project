import {battleNodes} from '../App'

const baseURL = 'http://127.0.0.1:5000/api/battlefields/';


export const getBattlefields = () => {
    const result = fetch(baseURL)
    .then(res => res.json())

    return result

};


// export const QuerySearch = () => {var url = "https://en.wikipedia.org/w/api.php"; 

// var params = {
//     action: "query",
//     list: "prefixsearch",
//     pssearch: "battle of Adwalton",
//     format: "json"
// };

// url = url + "?origin=*";
// Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

// fetch(url)
//     .then(function(response){return response.json();})
//     .then(function(response) {
//         var pages = response.query.prefixsearch;
//         for (var page in pages) {
//             console.log( pages[page].title );
//         }
//     })
//     .catch(function(error){console.log(error);});}