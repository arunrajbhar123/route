import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
const Product = () => {
  const {id}=useParams();
  console.log(id);
  const [product, setProduct] = useState({})
  
 
  useEffect(() => {
  if(id){
    fetch(`http://localhost:8080/product/${id}`)
    .then((r)=> r.json())
    .then((d)=> setProduct(d))
  }
  }, [id])
  
  return (
    <div>Product id: {id}
    <div>{product.name}</div>
    <h2>{product.price}</h2></div>
  )
}

export default Product