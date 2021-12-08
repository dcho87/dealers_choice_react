const express = require('express');
const { static } = express;
const path = require('path');
const { syncAndSeed } = require('./db');

const app = express();

app.use('/dist', static(path.join(__dirname, 'dist')));
app.use('/public', static(path.join(__dirname, 'public')))
app.get('/', (req, res, next) => {res.sendFile(path.join(__dirname, 'index.html'))});


const init = async() => {
    try {
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on port ${port}`));
    }
    catch(ex){
        console.log(ex)
    }
}

init();