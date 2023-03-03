// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
// ROUTES
const routerApod = require('./src/routes/apod.js');
const routerUser = require('./src/routes/user.js');
const routerAuth = require('./src/routes/auth.js');
const routerAll = require('./src/routes/all.js');
const routerApodsApi = require('./src/routes/syncApi.js');
// SERVICES
const { ensureAuthenticated } = require('./src/middleware/auth.js');
const connectToDb = require('./src/services/db.js');

/**
 * *startApp()*
 * *This function objetive is that when you write the command yarn start or npm start, the app start up.*
 * */
const startApp = async () => {
    const app = express();
    const port = process.env.PORT;

    app.use(bodyParser.json());
    app.use(express.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // MIDDLEWARE
    app.use(ensureAuthenticated)
    // AUTHENTICATION
    app.use('/auth', routerAuth)
    // ROUTES OF COLLECTIONS(CRUD)
    app.use('/users', routerUser)
    app.use('/all', routerAll);
    app.use('/apods', routerApod);
    // API SYNC
    app.use('/sync-api', routerApodsApi);

    try {
        await connectToDb();
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        })
    } catch (error) {
        console.log('Can not start up the App: ' + error.message)
        process.exit(1)
    }
}

startApp()
