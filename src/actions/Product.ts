import axios from "axios";
export const fetchProduct = () => async (dispatch: any) => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    dispatch({ type: "product/fetch", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const addProducts = (newProduct: any) => async (dispatch: any) => {
  try {
    const { data } = await axios.post("http://localhost:3000/products",newProduct);
    dispatch({ type: "product/add", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateProducts = (newProduct: any) => async (dispatch: any) => {
  try {
    const { data } = await axios.put(`http://localhost:3000/products/${newProduct.id}`,newProduct);
    dispatch({ type: "product/add", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const removeProducts = (idProduct: any) => async (dispatch: any) => {
  try {
    axios.delete(`http://localhost:3000/products/${idProduct}`);
    dispatch({ type: "product/delete", payload: idProduct });
  } catch (error) {
    console.log(error);
  }
};
