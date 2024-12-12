import { boolean, number, object, string, Output, array } from "valibot";

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
});
export const ProductsSchema = array(ProductSchema);
export type Product = Output<typeof ProductSchema>;

export function toBoolean(str: string) {
  return str.toLowerCase() === "true";
}


