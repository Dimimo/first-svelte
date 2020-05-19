<script>
  // export let name;
  import { writable } from "svelte/store";
  import { slide, fade, fly } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";
  let visible = true;
  $: total = -1;
  let tax = 0;
  let bill = 0;
  let items = [
    { id: 0, item: "carrots", price: 25, nr: 2 },
    { id: 1, item: "potatoes", price: 35, nr: 5 },
    { id: 2, item: "cigarettes", price: 95, nr: 3 },
    { id: 3, item: "catfood", price: 75, nr: 2 },
    { id: 4, item: "burgers", price: 125, nr: 3 }
  ];

  $: tax = total * 0.19;
  $: bill = total + tax;

  function calculate() {
    //total = total + item.price * item.nr;
    total = 0;
    items.forEach(item => {
      total = total + item.price * item.nr;
    });
  }

  function addOne(item) {
    ++item.nr;
    total = total + item.price;
    //console.log(item);
    calculate();
    return item.nr;
  }

  function minusOne(item) {
    if (item.nr > 0) {
      --item.nr;
      total = total - item.price;
    }
    calculate();
    //console.log(item);
    return item.nr;
  }
</script>

<style>
  /* h1 {
    color: darkgreen;
    font-stretch: extra-condensed;
  } */
  .button {
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  .button1 {
    border: solid darkblue;
    color: rgb(53, 12, 236);
  }
  .button2 {
    border: solid darkgreen;
    color: rgb(5, 133, 47);
  }
</style>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
  <br />
  <button class="button {visible ? 'button1' : 'button2'}">Click me</button>
</label>

<ul>
  {#each items as item, i ((item.nr, item.id))}
    <li id={i}>
      <!-- <input bind:value={item.nr}> -->
      {item.nr} pieces of {item.item} at ${item.price}
      <button on:click={() => (item.nr = addOne(item))}>+</button>
      <button on:click={() => (item.nr = minusOne(item))}>-</button>
    </li>
  {/each}
</ul>

<h3>total price: {total !== -1 ? total : calculate()}</h3>
<h4>total tax: {tax}</h4>
<h2>total bill: {bill}</h2>

<!-- {#if visible}
  <h1
    in:slide={{ delay: 250, duration: 500, easing: elasticInOut }}
    out:fly={{ x: 200, y: 200, duration: 500 }}>
    Hello {name}!
  </h1>
{/if} -->
