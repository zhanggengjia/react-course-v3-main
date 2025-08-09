import React from 'react'
import { useLoaderData } from 'react-router-dom';
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeaturedProducts = () => {
  const { products } = useLoaderData();
  return (
    <div className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid products={products} />
    </div>
  )
}

export default FeaturedProducts