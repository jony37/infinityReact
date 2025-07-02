import "../home/home.css"
import "../App/App.css"

const Home = ({ home }) => {
  const { img, homeTitle, homeSubTitle, icon } = home;

  return (
    <div
      className="bg-img d-flex flex-column justify-content-center align-items-center text-white text-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "150%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundAttachment: "fixed"
      }}
    >

      <h2 className="tm-hero-title">{homeTitle}</h2>
      <p className="tm-hero-subtitle pb-5" style={{width: "320px"}}>{homeSubTitle}</p>
      <div>{icon}</div>
    </div>
  );
};



export default Home