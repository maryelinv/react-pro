import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from '../contexts/productContext';

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = (
  { title = '', className = '', style }: Props) => {
  const { product: { title: productTitle } } = useContext(ProductContext);

  return (
    <span
      className={`${styles.productDescription}
      ${className}`}
      style={style}
    >
      {title || productTitle}
    </span>
  )
}
