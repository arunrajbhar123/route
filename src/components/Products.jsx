import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,Outlet } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/product").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      
      <h1>Products</h1>
    <div className="flex">
    <div>{data.map((el,i) => (
        <div key={i}>
          <Link to={`/products/${el.id}`}>{el.name}</Link>
        </div>
      ))}</div>
      <Outlet/>
    </div>

    </div>
  );
};

export default Products;
