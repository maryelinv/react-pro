import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from '../contexts/productContext';

export const ProductTitle = ({ title = '' }: { title?: string }) => {
  const { product: { title: productTitle } } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title || productTitle}
    </span>
  )
}
