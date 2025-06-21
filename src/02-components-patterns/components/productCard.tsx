import { useProduct } from '../hooks/useProduct';
import { ProductProvider } from '../contexts/productContext';
import styles from '../styles/styles.module.css';
import { Product } from '../interfaces/interfaces';
import { CSSProperties, ReactElement } from 'react';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({
  product,
  children,
  className,
  style
}: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <ProductProvider value={{ counter, increaseBy, product }}>
      <div
        className={`${styles.productCard} 
        ${className ?? ''}`}
        style={style}
      >
        {children}
      </div >
    </ProductProvider>
  )
}
