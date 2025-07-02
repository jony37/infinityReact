const ContactUs = ({ contactUs }) => {
  const { img, title, subtitle } = contactUs;
  return (
    <div
    className="text-center"
      style={{
        color: "white",
        backgroundColor: "#001828",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        minHeight: "980px",
        position: "relative",
        paddingBottom: "50px",
        paddingTop: "100px",
        backgroundAttachment: "fixed",
        marginTop: "140px"
      }}
    >
      <h2 className="tm-section-title mb-4">{title}</h2>
      <p className="mb-5" style={{width:"1000px", marginLeft: "230px"}}>{subtitle}</p>
    </div>
  );
};

export default ContactUs;
