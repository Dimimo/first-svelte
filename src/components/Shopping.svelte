<script>
    import AddItem from "./forms/AddItem.svelte";

    export let items;

    $: total = -1;
    let tax = 0;
    let bill = 0;
    $: tax = parseFloat((total - total / 1.19).toFixed(2));
    $: bill = parseFloat((total - tax).toFixed(2));

    function calculate() {
        //total = total + item.price * item.nr;
        total = 0;
        items.forEach((item) => {
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

    function remove(index) {
        items = items.filter((r, i) => i !== index);
        calculate();
    }

    function sort(array) {
        let x = "",
            y = "";
        return array.sort(function (x, y) {
            let a = x.item.toUpperCase(),
                b = y.item.toUpperCase();
            return a === b ? 0 : a > b ? 1 : -1;
        });
    }

    function handleItem(data) {
        items = [...items, data.detail[0]];
        calculate();
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

<AddItem {items} on:itemAdded={handleItem} />
