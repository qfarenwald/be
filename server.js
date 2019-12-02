// backend
const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.locals.pets = [
  { id: '1', name: 'Felix', type: 'fish' },
  { id: '2', name: 'Zaz', type: 'cat' },
  { id: '3', name: 'Akela', type: 'dog' }
];

app.get('/', cors(), (req, res) => {
  const { pets } = app.locals;

  res.json({ pets })
});

app.listen(app.get('port'), () => {
  console.log(`Trying out enviroment variables over on http://localhost:${app.get('port')}`)
});
