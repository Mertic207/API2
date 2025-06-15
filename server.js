const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const matches = [
  {
    id: 1,
    event: "Slavia Praha vs Sparta Praha",
    odds: {
      "1": 2.5,
      "X": 3.2,
      "2": 2.8,
    },
  },
  {
    id: 2,
    event: "Baník Ostrava vs Plzeň",
    odds: {
      "1": 2.9,
      "X": 3.1,
      "2": 2.4,
    },
  },
];

app.get('/', (req, res) => {
  res.send('API běží!');
});

app.get('/api/matches', (req, res) => {
  res.json(matches);
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});
