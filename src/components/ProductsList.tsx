import { addProducts, fetchProduct, removeProducts, updateProducts } from "@/actions/Product";
import React, { Dispatch, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductsList = () => {
  const { products } = useSelector((state: any) => state.products);
  console.log(products);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <>
      <div>
        <h1>ProductsList</h1>
        <button className="bg-blue-500 p-2 mx-2" onClick={() => dispatch(updateProducts({
          name: `Product update`,
          id: 2
        }))}>
        Update
      </button>
        <button
          className="bg-red-500 p-2"
          onClick={() =>
            dispatch(
              addProducts({
                id: products.length + 1,
                name: `Product ${products.length + 1}`,
                price: products.length * 100 + 10,
              })
            )
          }
        >
          Add Product
        </button>
        {products.map((item: any) => {
          console.log(item);

          return (
            <div className="my-2" key={item.id}>
              <span className="mx-2 text-blue-500">{item.name}</span>
              <span className="mx-2 text-red-500">{item.price}</span>
              <button className="bg-pink-500 p-1 rounded-md text-white"
              onClick={()=> dispatch(removeProducts(item.id))}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
