import { useProduct } from '../hooks/useProduct';
import { ProductProvider } from '../contexts/productContext';
import { ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductCard = ({
  product,
  children
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <ProductProvider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
      </div >
    </ProductProvider>
  )
}
