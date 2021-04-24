/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
  <header sx={{ height: '60px', width: '100vw', bg: 'white', borderBottom: '1px solid', borderColor: 'secondary' }}>
    <nav
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', variant: 'containers.page', height: '100%' }}>
      <Link href="/">
        <a sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>Golf App</a>
      </Link>

      <Link href="/scores">
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>Scores</a>
      </Link>

      <Link href={`${process.env.HELP_APP_URL}`}>
        <a
          sx={{
            color: 'text',
            fontSize: 3,
            cursor: 'pointer'
          }}
        >
          Help
        </a>
      </Link>
    </nav>
  </header>
)

export default Nav
