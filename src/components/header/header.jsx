import "../App/App.css";
import "../header/header.css"
const Header = (props) => {
  const { logo } = props;
  return (
    <header>
      {
        window.addEventListener('scroll', function () {
          if (window.scrollY >= 150) {
            document.querySelector('.navbar').classList.add('active')
          } else {
            document.querySelector('.navbar').classList.remove('active')
          }
        })
      }
      <nav className="navbar navbar-expand-md tm-navbar" id="tmNav">
        <div className="container">
          <div className="tm-next" style={{ marginRight: "380px" }}>
            <a href="#infinite" className="navbar-brand current">
              {logo}
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {props.header.map((item) => (
                <li className="nav-item">
                  <a className="nav-link tm-nav-link current" href="#infinite">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
