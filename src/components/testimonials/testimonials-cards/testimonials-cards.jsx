import "./testimonials-cards.css";

const TestimonialsCards = ({ testimonialsCards }) => {
  return (
    <div className="tm-testimonials-wrapper d-flex">
      {testimonialsCards.map((item, index) => (
        <figure
          className="tm-testimonial-item"
          key={index}
          style={{ width: "280px", margin: "0 auto" }}
        >
          <img src={item.img} alt={item.name} />
          <blockquote>{item.description}</blockquote>
          <figcaption>{item.name}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default TestimonialsCards;
