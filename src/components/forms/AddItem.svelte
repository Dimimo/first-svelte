<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let item = "onion",
    nr = 5,
    price = 10;

  function handleForm() {
    let added = [
      {
        item,
        price: price + 0,
        nr: nr + 0
      }
    ];
    item = nr = price = '';
    dispatch("itemAdded", added);
  }
</script>

<form action="/add_item" on:submit|preventDefault={handleForm}>
  <input type="text" name="item" placeholder="product" bind:value={item} />
  <br />
  <input type="text" name="nr" placeholder="number" bind:value={nr} />
  <br />
  $
  <input type="text" name="price" placeholder="price" bind:value={price} />
  <br />
  <button type="submit">Add this item</button>
</form>
