import { ProductCard as ProductCardHOC } from './productCard';
import { ProductButtons } from './productButtons';
import { ProductImage } from './productImage';
import { ProductTitle } from './productTitle';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductImage } from './productImage';
export { ProductTitle } from './productTitle';
export { ProductButtons } from './productButtons';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC,
  {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
  }
);

export default ProductCard;
