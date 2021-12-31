import { http } from "./http";

// const schema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  createdAt: Date;
}

export const getAllProducts = async (): Promise<{ products: Product[] }> => {
  const path = `/products`;

  const {
    data: { data },
  } = await http.get(path);

  const products: Product[] = data;

  return {
    products,
  };
};
