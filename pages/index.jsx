import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = ({ content }) => {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div sx={{ variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%' }}>
        <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      </div>
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Golf Scorecard Handicap Calculator'
      }
    }
  }
}

export default Home;
