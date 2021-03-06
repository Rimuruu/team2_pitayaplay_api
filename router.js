import {getGame, putGame, getListGame, getComment, putComment, deleteComment, getCategory,getListCategory} from "./game.js"

const routes = (app) => {
  app.route('/game/:id')
      .get(getGame)

  app.route('/game')
      .get(getListGame)
      .post(putGame)

  app.route('/game/:id/comment')
      .get(getComment)
      .post(putComment)

  app.route('/game/:id/comment/:idc')
      .delete(deleteComment)

  app.route('/category/:id')
      .get(getCategory)
  
  app.route('/category')
      .get(getListCategory)
}

export default routes