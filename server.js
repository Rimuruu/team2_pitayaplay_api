import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './router.js'

const app = express();
const PORT = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const mx = req.params;
  console.log(mx);
  res.send("Hello world");
});

routes(app);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT, () =>
  console.log(`Node server running on ${PORT}!`),
);