<script>
    import ProductPage from "../1/ProductPage.svelte";

    export let data;
</script>

<ProductPage
        title="Gates"
        description="super nice gates"
        headline="Gates"
        image="/pages/gates/front.jpg"
        imageLinks={data.imageLinks}
/>