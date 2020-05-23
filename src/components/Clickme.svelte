<script>
  import { slide, fade, fly } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";

  let name = 'Wiski';
  let visible = true;
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

{#if visible}
  <h1
    in:slide={{ delay: 250, duration: 500, easing: elasticInOut }}
    out:fly={{ x: 200, y: 200, duration: 500 }}>
    Hello {name}!
  </h1>
{/if}
