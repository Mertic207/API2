import { useEffect, useState } from 'react';
import { getMatches } from '../api/matches';
import MatchCard from './MatchCard';

function MatchList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMatches();
      setMatches(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dnešní zápasy</h2>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}

export default MatchList;
