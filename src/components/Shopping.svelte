<script>
    import AddItem from "./forms/AddItem.svelte";
    import { onDestroy } from "svelte";
    import { the_items } from "../stores";
    import { the_taxrate } from "../stores";

    let items;
    const it = the_items.subscribe((val) => {
        items = val;
    });

    let taxrate;
    const tr = the_taxrate.subscribe((val) => {
        taxrate = val;
    });

    $: total = -1;
    let tax = 0;
    let bill = 0;
    $: tax = parseFloat((total - total / taxrate).toFixed(2));
    $: bill = parseFloat((total - tax).toFixed(2));

    onDestroy([it, tr]);

    function calculate() {
        total = 0;
        items.forEach((item) => {
            total = total + item.price * item.nr;
        });
        the_items.update((n) => (n = items));
    }

    function addOne(item) {
        ++item.nr;
        total = total + item.price;
        calculate();
        return item.nr;
    }

    function minusOne(item) {
        if (item.nr > 0) {
            --item.nr;
            total = total - item.price;
        }
        calculate();
        return item.nr;
    }

    function remove(index) {
        items = items.filter((r, i) => i !== index);
        calculate();
    }

    function sort(array) {
        return array.sort(function (x, y) {
            let a = x.item.toUpperCase(),
                b = y.item.toUpperCase();
            return a === b ? 0 : a > b ? 1 : -1;
        });
    }
</script>

<style>
    /* your styles go here */
</style>

<ul>
    {#each sort(items) as item, i}
        <li>
            {item.nr}
            {item.item}
            at ${item.price}
            <button on:click={() => (item.nr = addOne(item))}>+</button>
            <button on:click={() => (item.nr = minusOne(item))}>-</button>
            <button on:click={() => remove(i)}>x</button>
        </li>
    {/each}
</ul>

<h3>Bill: {total !== -1 ? total : calculate()}</h3>
<h4>Net: {bill} <br /> Tax: {tax}</h4>

<AddItem />
