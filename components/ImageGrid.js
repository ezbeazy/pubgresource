import styles from './ImageGrid.module.css'

/*
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
};*/

const ImageGrid = ({ images }) => {
  return (
    <div className={styles.imageGrid}>
      {images.map((image, index) => (
        <a href={image.link} key={index}>
        <div className={styles.imageItem}>
          <img src={image.url} alt={image.label} />
          <div className={styles.imageLabel}>{image.label}</div>
        </div>
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;