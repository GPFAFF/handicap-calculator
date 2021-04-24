/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Scores = ({ scores }) => {
  console.log(scores);

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My scores</h1>

      <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        {scores.map(score => (
          <div sx={{ width: '33%', p: 2 }}>
            <Link key={score.id} href="/scores/[id]" as={`/scores/${score.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card', }}>
                  <strong>{score.score}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/scores`);
  const { data } = await res.json();

  console.log(data);
  return {
    props: {
      scores: data
    }
  }
}

export default Scores;
