import { produce } from "immer";
const initialSate = {
  products: [],
  isLoading: false,
  error: "",
};
export const productReducer = (state = initialSate, action:any) => {
  return produce(state, (dragState:any) => {
    switch (action.type) {
      case "product/fetch":
        dragState.products = action.payload;
        break;
      case "product/add":
        dragState.products.push(action.payload);
        break;
      case "product/delete":
        dragState.products = dragState.products.filter(
          (product: any) => product.id !== action.payload
        );
        break;
      case "product/update":
        dragState.products = state.products.map((item:any) => item.id == action.payload.id ? action.payload : item)
        break;

      default:
        break;
    }
  });
};
