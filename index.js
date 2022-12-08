const express = require('express')
const app = express()
const port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
})

// cach run ung dung 
// [cmd run: node index.js]

// Install nodemon & inspector => debug
// nodemon
// nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// [[cmd run: npm i nodemon --save-dev] (--save-dev cai tren moi truong dev)