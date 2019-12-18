/*
Info on express: http://expressjs.com/en/starter/hello-world.html
 */
import express from 'express';
import cookieSession from 'cookie-session';

const app = express();
//trust first proxy
app.set('trust proxy',1);
//set cookies
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    path: '/'
}));


import { registerRoutes } from "./routes";
import { setEnvironment } from "./config/env";

setEnvironment(app);
//these routes must be called before app.get('*', ...)
registerRoutes(app);


//implement counter
app.use(function (req, res, next) {
    let counter = req.session.views || 0;
    req.session.views = counter++;
    res.end(counter + ' views');
});


const port = 3000;
// All non-API requests made to the server, for example, http://www.homepage.com/,
// will hit this request, which just returns the main layout, html file
app.get('*', (req, res) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        return res.send(
            'Running server in development mode.'
        );
    } else {
        // Returns the main index file in production environment
        return res.sendFile('index.html', { root: __dirname + '/../dist/' });
    }
});

// Starts the server on the given port
app.listen(port, () => {
    console.log(`Application listening on port ${port} in ${process.env.NODE_ENV} mode!`);
});
