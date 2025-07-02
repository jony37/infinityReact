const ContactUsCards = ({ forms, icons }) => {
  return (
    <div className="row" style={{marginLeft: "200px"}}>
      <div className="col-5">
        <form>
          {forms.map((item, index) => {
            if (item.type === "textarea") {
              return (
                <textarea
                  key={index}
                  name={item.name}
                  placeholder={item.placeholder}
                  className="tm-input"
                  style={{ height: "200px" }}
                />
              );
            } else {
              return (
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  className="tm-input"
                />
              );
            }
          })}
        </form>
      </div>

      <div className="col-5 text" style={{marginLeft: "30px"}}>
        {
            icons.map((item, index) => (
                <div className="contact-item">
                  <a rel="nofollow" href="https://www.tooplate.com/contact" class="item-link text-decoration-none">
                      <i className={item.icon}></i>
                      <span style={{marginLeft: "18px"}}>{item.text}</span>
                  </a>              
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default ContactUsCards;
