<script>
  import Shopping from "./components/Shopping.svelte";
  //import Clickme from "./components/Clickme.svelte";
  // import { writable } from "svelte/store";

  let items = [
    { item: "carrots", price: 25, nr: 2 },
    { item: "potatoes", price: 35, nr: 5 },
    { item: "cigarettes", price: 95, nr: 3 },
    { item: "catfood", price: 75, nr: 2 },
    { item: "burgers", price: 125, nr: 3 }
  ];

  
</script>

<style>

</style>

<Shopping {items} />

