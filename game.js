const gameList = [
  {id:0,title:"Titre",jeu : "Animal Crossing",category:"RPG",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://www.actugaming.net/wp-content/uploads/2016/09/Animal-Crossing-New-Leaf-900x450.jpg"},
  {id:1,title:"Jeu 1",jeu : "Doom Eternal",category:"FPS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:"https://steamcdn-a.akamaihd.net/steam/apps/782330/capsule_616x353.jpg?t=1571753976"},
  {id:2,title:"Jeu 2",jeu : "Animal Crossing",category:"MMO",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""},
  {id:3,title:"Jeu 3",jeu : "Animal Crossing",category:"RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""},
  {id:4,title:"Jeu 4",jeu : "Animal Crossing",category:"FPS/RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""},
  {id:5,title:"Jeu 5",jeu : "Animal Crossing",category:"FPS/RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""},
  {id:6,title:"Jeu 6",jeu : "Animal Crossing",category:"RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""},
  {id:7,title:"Jeu 7",jeu : "Animal Crossing",category:"RPG",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""},
  {id:8,title:"Jeu 8",jeu : "Animal Crossing",category:"MMO",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""},
  {id:9,title:"Jeu 9",jeu : "Animal Crossing",category:"MMO",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""},
  {id:10,title:"Jeu 10",jeu : "Animal Crossing",category:"RTS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""},
  {id:11,title:"Jeu 11",jeu : "Animal Crossing",category:"FPS",auteur:"auteur",date:new Date('December 17, 2000 03:24:00'),text:"test",note:10,image:""}
]

const CommentList = [
  {id:0,text:"Comment 1 jeu 0",email:"a@b.fr",username:"pseudo"},
  {id:2,text:"Comment 1 jeu 2",email:"",username:""},
  {id:5,text:"Comment 1 jeu 5",email:"",username:""},
  {id:1,text:"Comment 1 jeu 1",email:"",username:""},
  {id:0,text:"Comment 2 jeu 0",email:"",username:""}
]

const CategoryList = [
  {category:"RPG",id:0},
  {category:"FPS",id:1},
  {category:"MMO",id:2},
  {category:"RTS",id:3}
]

export function getGame(req, res) {
  const id = req.params.id
  console.log(`Get Game `);
  for(let i = 0; i < gameList.length; i++){
    if(id == gameList[i].id) res.send(gameList[id]);
  }
  
  
}

export function putGame(req, res) {

  const name = req.body.jeu || "Random"
  const category = req.body.category || "RPG"
  const titre = req.body.titre;
  const image = req.body.image;
  const auteur = req.body.auteur;
  const id = gameList.length;
  const text = req.body.text;
  const note = req.body.note;
  const jeu = req.body.jeu;
  const date = Date.now();
  const game = {id:id,title:titre,jeu : jeu,category:category,auteur:auteur,date:date,text:text,note:note,image:image}
  gameList.push(game);
  console.log(`Put Game`),
  res.send("Test ajouté")
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
    if(CommentList[index].id== id){
      tab_resul.push(CommentList[index])
    }
  }  

  console.log(`Get Comment`),
  res.send(tab_resul);
}

export function putComment(req,res){
  const tab_resul = [];
  const idComment = req.params.id;
  const comment = {id:idComment,text:req.body.comment,email:req.body.email,username:req.body.username} 
  CommentList.push(comment);
  res.send(CommentList[CommentList.length-1]);
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
  const id = req.params.id;
  const tab_resul = [];
  var category=""; 
  for(let i = 0; i<CategoryList.length;i++){
      if(CategoryList[i].id == id) category = CategoryList[i].category;
  }


  gameList.forEach(CategoryGame);

  function CategoryGame(item,index, arr){
    if(gameList[index].category== category){
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