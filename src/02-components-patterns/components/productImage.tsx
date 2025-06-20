import { useContext } from 'react';

import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from '../contexts/productContext';

export const ProductImage = ({ image = '' }) => {
  const { product: { img: productImg } } = useContext(ProductContext);

  let imgToShow: string = noImg;

  if (image) {
    imgToShow = image;
  } else if (productImg) {
    imgToShow = productImg;
  }

  return (
    <img className={styles.productImg} src={imgToShow} alt={'Product'} />
  )
}