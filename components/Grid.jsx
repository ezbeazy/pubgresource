//import styles from './Grid.module.css'
const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={image.url} alt={image.label} />
          <div className="image-label">{image.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;