import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ContentsController.index')
  Route.get('/content', 'ContentsController.index')
  Route.post('/content', 'ContentsController.store')
  Route.patch('/content/:id', 'ContentsController.update')
}).prefix('api')
