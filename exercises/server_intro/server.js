const express = require('express');
const app = express();

app.get('/', (req, res ) => {
    res.send("Hello World")
})



app.listen(5555, () => {
    console.log('server is running on port 5555.  Check it out')
})
