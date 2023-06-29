for admin
    app.post('/login', function (req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/admin'); }
            req.logIn(user, function (err) {
                if (err) { return next(err); }

                //return res.redirect('/users/' + user.username);
                var redirectTo = req.session.redirectTo ? req.session.redirectTo : '/admin';
                delete req.session.redirectTo;

                res.status(200).send({ redirect: redirectTo });

            });
        })(req, res, next);
    });

    //create logout in backend page in javascript for admin 
    app.get('/logout', function (req, res) {

        req.session = null;

        req.logout();

        //res.sendStatus(200);

        res.status(200).send({ redirect: '/admin' });

    });

    //create middleware to check login status in backend page in javascript for admin 
    app._routerMiddleware = app._routerMiddleware || [];
    app._routerMiddlewareForAdmin = app._routerMiddlewareForAdmin || [];

    app._routerMiddlewareForAdmin = [function customRouterMiddlewareForAdmin(req, res, next) {

        var isAuthenticated = false;//default value of isAuthenticated is false i-e user is not logged in 
         /*if the request has a valid session then set the value of isAuthenticated to true*/   /*if the request has a valid session then set the value of isAuthenticated to true*/     /*if the request has a valid session then set the value of isAuthenticated to true*/      /*if the request has a valid session then set the value of isAuthenticated to true*/       /*if the request has a valid session then set the value of isAuthenticated to true*/       /*if the request has a valid session then set the value of isAuthenticated to true*/       /*if t