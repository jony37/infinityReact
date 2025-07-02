import WhatWeDoCard from "./what-we-do-cards/what-we-do-cards";

const WhatWeDo = ({title, subtitle, cards, buttonText}) => {
  
  return (
    <div className="container">
      <div class="col-lg-12 col-xl-12 mt-5 pt-5">
        <div class="tm-intro-text-container">
          <h2 class="tm-text-primary mb-4 tm-section-title">{title}</h2>
          <p class="mb-4 tm-intro-text">
           {subtitle}
          </p>
        </div>
      </div>

      <WhatWeDoCard cards = {cards} buttonText = {buttonText}/>
    </div>
  );
};

export default WhatWeDo;
