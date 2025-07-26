// app/products/layout.js
import React from 'react';
import '../styles/products.css';

export const metadata = {
  title: 'Products',
};

export default function ProductsLayout({ children }) {
  return <main className="products-page">{children}</main>;
}
