<script>
    import { onDestroy } from "svelte";
    import {the_items} from '../../stores';
let items;
  const it = the_items.subscribe(val => {
    items = val;
  });

  function addOne(item) {
        ++item.nr;
        total = total + item.price;
        calculate();
        return item.nr;
    }

    onDestroy(it);
</script>

<button on:click={addOne}>+</button>
