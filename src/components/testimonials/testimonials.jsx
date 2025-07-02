import TestimonialsCards from "./testimonials-cards/testimonials-cards";


const Testimonials = ({ testimonials }) => {
  const { img, title, subtitle, testimonialsCards } = testimonials;
  return (
    <div
      className="testimonial-card"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        padding: "80px 0",
        color: "white",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h1 className="text-white text-center mb-4 tm-section-title">{title}</h1>
      <p className="mx-auto tm-section-desc text-center">{subtitle}</p>


      <div className="container mt-5 pt-3">
        <TestimonialsCards testimonialsCards ={testimonialsCards}/>

      </div>
    </div>
  );
};

export default Testimonials;
