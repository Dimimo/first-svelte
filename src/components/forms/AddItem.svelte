<script>
  import { createEventDispatcher } from "svelte";
  import { the_items } from '../../stores';

  let items;
  const it = the_items.subscribe(val => {
    items = val;
  });

  

  const dispatch = createEventDispatcher();

  let item = "onion",
    nr = 5,
    price = 10;

  function addItem() {
    let added = 
      {
        item,
        price: price + 0,
        nr: nr + 0,
      }
    ;
    item = nr = price = "";
    the_items.update(n => n = [...items, added]);
    console.log(items);
  }
</script>

<form action="/add_item" on:submit|preventDefault={addItem}>
  <input type="text" name="item" placeholder="product" bind:value={item} />
  <br />
  <input type="text" name="nr" placeholder="number" bind:value={nr} />
  <br />
  $
  <input type="text" name="price" placeholder="price" bind:value={price} />
  <br />
  <button type="submit">Add this item</button>
</form>
