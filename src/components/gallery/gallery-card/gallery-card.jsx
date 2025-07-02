
const GalleryCard = ({galleryCards, index}) => {
  return (
    <div className="d-flex">
      {galleryCards.map((item) => (
        <a 
          href="img/gallery-img-01.jpg"
          class="slick-slide slick-current slick-active"
          tabindex="0"
          role="tabpanel"
          id="slick-slide10"
          aria-describedby="slick-slide-control10"
          data-slick-index="0"
          aria-hidden="false"
        >
          <figure className="effect-honey tm-gallery-item">
            <img src={item} alt="" className="img-fluid" />

            <figcaption>
              <h2>
                <i>
                  Physical Health <span>Exercise!</span>
                </i>
              </h2>
            </figcaption>
          </figure>
        </a>
      ))}
    </div>
  );
};

export default GalleryCard;
