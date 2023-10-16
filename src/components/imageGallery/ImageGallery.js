import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data }) => {
  return (
    <>
      <ul className="ImageGallery">
        {data.map(item => (
          <ImageGalleryItem
            key={item.id}
            smalSize={item.webformatURL}
            largeSize={item.largeImageURL}
            description={item.tags}
          ></ImageGalleryItem>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
