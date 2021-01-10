const express = require('express')

const app = express()
const port = process.env.PORT || 8080
const routes = require('./routes')

// configure router
app.use('/', routes)

//errors
app.use((err, req, res, next) => {
    res.status(err.status || 400).json({
        success: false,
        message: err.message || 'error',
        errors: err.error || [],
    });
});

app.use((req, res) => {
    res.status(404).json({success: false, message: 'Page not found'});
});

app.listen(port)

console.log(`api running on http://localhost:${port}`)
