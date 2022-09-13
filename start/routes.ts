import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('/', 'ContentsController.index')
    Route.get('/content', 'ContentsController.index')
    Route.post('/content', 'ContentsController.store')
    Route.patch('/content/:id', 'ContentsController.update')
    Route.delete('/content/:id', 'ContentsController.destroy')
  }).middleware('auth')
  // middleware('auth')
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
}).prefix('api')
