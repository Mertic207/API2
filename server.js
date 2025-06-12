const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API běží!');
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});
