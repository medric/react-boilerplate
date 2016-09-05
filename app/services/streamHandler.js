import fetch from 'isomorphic-fetch';
// http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/
function request() {
    let url = '';
    let payload = {
        'user' : '',
        'password' : '',
        'lat' : '45.75',
        'lng' : '4.85',
        'distance' : '1000'
    };

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload)
    });

    //return fetch(`${url}`, payload);
    // return fetch(`${url}`, {

    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    // }, payload);
}

const streamHandler  = {
    request: request
}

export default streamHandler;
