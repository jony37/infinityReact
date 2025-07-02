import "./App.css";
import Header from "../header/header";
import Home from "../home/home";
import WhatWeDo from "../what-we-do/what-we-do";
import Testimonials from "../testimonials/testimonials";
import Gallery from "../gallery/gallery";
import ContactUs from "../contact-us/contact-us";

const dataBase = {
  header: [
    "Infinite Loop",
    "Home",
    "What We Do",
    "Testimonials",
    "Gallery",
    "Contact",
  ],
  home: {
    img: "https://www.tooplate.com/templates/2117_infinite_loop/img/infinite-loop-01.jpg",
    homeTitle: "Infinite Loop",
    homeSubTitle: "Bootstrap 4.0 Parallax Theme Free HTML Template by TOOPLATE",
    icon: <i className="fas fa-2x fa-arrow-down tm-down-arrow"></i>,
  },
  whatWeDo: {
    title: "What We Do",
    subtitle:
      "This is Infinite Loop, free Bootstrap 4.0 HTML template with a parallax effect. This layout is what you can modify and use for your websites. Please spread a word to your friends about our website. Thank you for supporting us. If you have any question, you can contact us or chat with us on our Tooplate Facebook page.",
    whatWeDoCards: [
      {
        icons: <i class="far fa-3x fa-chart-bar text-center tm-icon"></i>,
        title: "Market Analysis",
        description:
          "Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.",
      },
      {
        icons: <i class="far fa-3x fa-comment-alt text-center tm-icon"></i>,
        title: "Fast Support",
        description:
          "Credit goes to Pexels website for all images used in this template. Cras condimentum mi et sapien dignissim luctus.",
      },
      {
        icons: <i class="fas fa-3x fa-fingerprint text-center tm-icon"></i>,
        title: "Top Security",
        description:
          "You have no authority to post this template as a ZIP file on your template collection websites. You can use this template for your commercial websites.",
      },
      {
        icons: <i class="fas fa-3x fa-users text-center tm-icon"></i>,
        title: "Social Work",
        description:
          "You can change Font Awesome icons by either fas or far in the HTML codes. For Examples: <i class='fas fa-users'><i class='far fa-chart-bar'>",
      },
    ],
    buttonText: ["Learn More", "Details"],
  },
  testimonials: {
    img: "https://www.tooplate.com/templates/2117_infinite_loop/img/infinite-loop-02.jpg",
    title: "Testimonials",
    subtitle:
      "Nulla dictum sem non eros euismod, eu placerat tortor lobortis. Suspendisse id velit eu libero pellentesque interdum. Etiam quis congue eros.",
    testimonialsCards: [
      {
        img: "https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-01.jpg",
        description:
          "This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.",
        name: "Catherine Win (Designer)",
      },
      {
        img: "https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-02.jpg",
        description:
          "This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.",
        name: "Catherine Win (Designer)",
      },
      {
        img: "https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-03.jpg",
        description:
          "This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.",
        name: "Catherine Win (Designer)",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    subtitle:
      "Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna, lobortis eu arcu a, aliquet tristique urna.",
    galleryCards: [
      "https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-01.jpg",
      "https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-02.jpg",
      "https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-03.jpg",
      "https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-04.jpg",
      "https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-05.jpg",
    ],
  },
  contactUs: {
    img: "https://www.tooplate.com/templates/2117_infinite_loop/img/infinite-loop-03.jpg",
    title: "Contact Us",
    subtitle: "Proin enim orci, tincidunt quis suscipit in, placerat nec est. Vestibulum posuere faucibus posuere. Quisque aliquam velit eget leo blandit egestas. Nulla id posuere felis, quis tristique nulla."
  },
};

function App() {
  return (
    <>
      <Header logo={dataBase.header[0]} header={dataBase.header.slice(1)} />
      <main>
        <Home home={dataBase.home} />
        <WhatWeDo
          title={dataBase.whatWeDo.title}
          subtitle={dataBase.whatWeDo.subtitle}
          cards={dataBase.whatWeDo.whatWeDoCards}
          buttonText={dataBase.whatWeDo.buttonText}
        />
        <Testimonials testimonials={dataBase.testimonials} />
        <Gallery gallery={dataBase.gallery} />
        <ContactUs  contactUs = {dataBase.contactUs}/>
      </main>
    </>
  );
}

export default App;
