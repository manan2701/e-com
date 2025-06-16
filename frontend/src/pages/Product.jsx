import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncgetproduct } from '../store/actions/productAction';

const Product = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productReducer)
  console.log(products);
  useEffect(()=> {
    dispatch(asyncgetproduct())
  })
  return (
    <div>Product</div>
  )
}

export default Product