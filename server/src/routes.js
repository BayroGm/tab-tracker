const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const SongsController = require('./controllers/SongsController')


module.exports=(app) => {
    app.post('/register',AuthenticationControllerPolicy.register,AuthenticationController.register)
    app.post('/login',AuthenticationController.login),

    app.get('/songs',SongsController.index)
    app.get('/songs/:songId', SongsController.show)
    app.post('/songs', SongsController.post)
    app.get('/users',AuthenticationController.users)
    app.delete('/songs/:songId',SongsController.delete)
    app.put('/songs/:songId',SongsController.edit)
}