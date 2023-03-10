import { pageLinks, socialLinks } from '../data'
const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((link) => {
            const { id, text, href } = link
            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            const { icon, id, href } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  )
}
export default Footer
