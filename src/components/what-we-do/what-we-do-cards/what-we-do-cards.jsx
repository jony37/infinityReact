import "../what-we-do-cards/what-we-do-cards.css";

const WhatWeDoCard = ({ cards, buttonText }) => {
  return (
    <div className="row tm-content-box mt-5">
      {cards.map((item) => (
        <>
          <div className="col-lg-1 mt-2">{item.icons}</div>
          <div className="col-lg-5 mt-2">
            <div className="tm-intro-text-container">
              <h2 className="tm-text-primary mb-4">{item.title}</h2>
              <p className="mb-4 tm-intro-text">{item.description}</p>
            </div>
          </div>
        </>
      ))}

      <div className="d-flex justify-content-around">
        {buttonText.map((btn) => (
          <>
            <div className="tm-continue">
              <a href="#testimonials" class="tm-intro-text tm-btn-primary">
                {btn}
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoCard;
