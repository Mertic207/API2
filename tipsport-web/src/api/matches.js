

// api/matches.js (pro Vercel nebo Next.js API route)

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

export default function handler(req, res) {
  res.status(200).json(matches);
}



