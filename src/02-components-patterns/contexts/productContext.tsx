import { createContext } from 'react';
import { ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
export const { Provider: ProductProvider } = ProductContext;