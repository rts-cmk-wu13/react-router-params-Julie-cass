import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dogs">Dogs</Link></li>
            <li><Link to="/detail/1">Detail</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
     
    </>
  )
}

export default Layout