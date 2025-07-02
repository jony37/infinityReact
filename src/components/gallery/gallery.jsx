import GalleryCard from "./gallery-card/gallery-card"

const Gallery = ({gallery}) => {
  const {title, subtitle, galleryCards}= gallery
  console.log(galleryCards);
  
  return (
    <div className='col-12 text-center mt-5 pt-5'>
      <h2 className='tm-text-primary tm-section-title mb-4'>{title}</h2>
      <p className='mx-auto tm-section-desc'>{subtitle}</p>

      <div className="container">
        <GalleryCard galleryCards= {galleryCards}/>
      </div>
    </div>
  )
}

export default Gallery