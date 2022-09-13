import { writable, derived } from "svelte/store";

export const the_items = writable([
  { item: "carrots", price: 25, nr: 2 },
  { item: "potatoes", price: 35, nr: 5 },
  { item: "cigarettes", price: 95, nr: 3 },
  { item: "catfood", price: 75, nr: 2 },
  { item: "burgers", price: 125, nr: 3 },
  { item: "beef", price: 250, nr: 2 },
]);

export const the_taxrate = writable(1.19);

export const profile = writable(null);
export const token = writable(null);
export const isAuthenticated = derived(
  [token, profile],
  (a) => a && a[0] && a[1]
);
export const view = writable(null);
