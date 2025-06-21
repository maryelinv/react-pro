import { JSX } from 'react';
import { Props as ProductCardProps } from '../components/productCard';
import { Props as ProductButtonsProps } from '../components/productButtons';
import { Props as ProductTitleProps } from '../components/productTitle';
import { Props as ProductImageProps } from '../components/productImage';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}

