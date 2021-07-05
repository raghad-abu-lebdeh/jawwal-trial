import './header.scss'

const Header = ({ dirc1, dirc2 }) => {
  const labels = ['3G', 'Individuals', 'Roaming & International Calling']
  return (
    <>
      <nav dir={`${dirc1}`} class="navbar navbar-expand-lg first_nav px-3">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">English | عربي</div>
        </div>
      </nav>
      <nav
        dir={`${dirc2}`}
        class="navbar navbar-expand-lg navbar-light bg-light px-3"
      >
        <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          alt=""
        ></img>
        <a class="navbar-brand" href="#">
          Jawwal
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {labels.map((label) => (
              <a class="nav-item nav-link" href="#">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
