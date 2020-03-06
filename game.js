const gameList = [
  ["Jeu 0","RPG"],
  ["Jeu 1","FPS/RTS"],
  ["Jeu 2","MMO"],
  ["Jeu 3","RTS"],
  ["Jeu 4","FPS/RTS"],
  ["Jeu 5","FPS/RTS"],
  ["Jeu 6","RTS"],
  ["Jeu 7","RPG"],
  ["Jeu 8","MMO"],
  ["Jeu 9","MMO"],
  ["Jeu 10","RTS"],
  ["Jeu 11","FPS/RTS"]
  
]

const CommentList = [
  [0,"Comment 1 jeu 0"],
  [2,"Comment 1 jeu 2"],
  [5,"Comment 1 jeu 5"],
  [1,"Comment 1 jeu 1"],
  [0,"Comment 2 jeu 0"]
]

const CategoryList = [
  "RPG",
  "FPS/RTS",
  "MMO",
  "RTS"
]

export function getGame(req, res) {
  const id = req.params.id
  console.log(`Get Game `),
  res.send(gameList[id][0])
}

export function putGame(req, res) {
  //const id = req.params.id || null
  const name = req.body.name || "Random"
  const type = req.body.type || "RPG"
  const maxGroceryList = gameList.length;

  /*if(id && id < maxGroceryList) {
    console.log(`update value ${gameList[id]} as ${name}`)
    gameList[id][0] = name;
    gameList[id][1] = type;
    res.send(gameList);
    return;
  }*/

  gameList.push([name,type]);
  console.log(`Put Game`),
  res.send(gameList)
}

export function getListGame(req, res) {
  console.log(`Get List Game`),
  res.send(gameList)
}

export function getComment(req,res){
  const tab_resul = [];
  const id = req.params.id;

  CommentList.forEach(Comment);

  function Comment(item,index, arr){
    if(CommentList[index][0] == id){
      tab_resul.push(CommentList[index])
    }
  }  

  console.log(`Get Comment`),
  res.send(tab_resul);
}

export function putComment(req,res){
  const tab_resul = [];
  const id = req.params.id;
  const comment = req.body.comment;

 /* CommentList.push([id,comment]);

  CommentList.forEach(Comment);

  function Comment(item,index, arr){
    if(CommentList[index][0] == id){
      tab_resul.push(CommentList[index][1])
    }
  }  

  res.send(tab_resul);
  console.log(`Put Comment`);*/

  CommentList.push([id,comment]);
  res.send(CommentList[CommentList.length-1][1]);
  console.log(`Put Comment`);

}

export function deleteComment(req,res){
  const idc = req.params.idc;
  const id = req.params.id;
  var count = 0;

  CommentList.forEach(Comment);

  function Comment(item,index, arr){
    if(CommentList[index][0] == id){
      count++;
      if(count == idc){  
        res.send(CommentList[index]);               
        CommentList.splice(index,1);             
        return;
      }
    }
  }  
  if(count < idc){
    res.send("Pas de Comment !");  
  }  
  console.log(`Delete Comment`);
}

export function getCategory(req,res){
  const id = req.params.id
  const tab_resul = [] 

  gameList.forEach(CategoryGame);

  function CategoryGame(item,index, arr){
    if(gameList[index][1] == CategoryList[id]){
      tab_resul.push(gameList[index])
    }
  }  
  res.send(tab_resul);
  console.log(`Get Category`)
}

export function getListCategory(req,res){
  res.send(CategoryList);
  console.log(`Get ListCategory`)
}