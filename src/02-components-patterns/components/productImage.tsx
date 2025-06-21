import { CSSProperties, useContext } from 'react';

import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from '../contexts/productContext';

export interface Props {
  image?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = (
  { image = '', className = '', style }: Props) => {
  const { product: { img: productImg } } = useContext(ProductContext);

  let imgToShow: string = noImg;

  if (image) {
    imgToShow = image;
  } else if (productImg) {
    imgToShow = productImg;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt={'Product'}
      style={style}
    />
  )
}