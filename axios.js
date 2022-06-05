const axios = require('axios').default;

var url = 'http://fakeapi.jsonparseronline.com/posts';

function get_example() {
    axios.get(url, {})
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function post_example() {
    axios.post(url, {
        "title": "Es una prueba",
        "content": "Corresponde al contennido de prueba.",
        "userId": 1,
        "categoryId": 2
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

//get_example();
post_example();