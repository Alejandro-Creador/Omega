const homeRouter = require('./index.router');
const loginRouter = require('./login.router');
const registerRouter = require('./register.router');
const mobMenuRouter = require('./mob.menu.router');
const loginPassRouter = require('./login.pass.router');








function routerApi(app){
    app.use(homeRouter);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/mob/menu', mobMenuRouter);
    app.use('/login/pass', loginPassRouter);
    

}

module.exports = routerApi;