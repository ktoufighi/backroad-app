import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* writing dry code, using .map() to iterate over the data for nav bar, and return ea item one by one */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              // console.log(link)
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              )
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              // deconstruct method
              const { id, href, icon } = link
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
