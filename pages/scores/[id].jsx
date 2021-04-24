/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default ({ scores }) => {
  const { score } = scores;
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>{score}</h1>
    </div>
  )
}

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`${process.env.API_URL}/api/scores/${params.id}`)

  if (!response.ok) {
    res.writeHead(302, {
      location: '/scores'
    })

    res.end()

    return {
      props: {}
    }
  }

  const { data } = await response.json();

  return {
    props: {
      scores: data
    }
  }
}
