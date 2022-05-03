const https = require('https');

const GetTodo = async (parent, args) => {
    https.get('https://jsonplaceholder.typicode.com/todos/' + args.id, (res) => {

        let data = '';

        // A chunk of data has been received.
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        // The whole response has been received. Print out the result.
        res.on('end', () => {
            return JSON.parse(data).explanation;
        });
    });
}

module.exports = { GetTodo };