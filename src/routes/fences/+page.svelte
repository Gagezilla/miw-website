<script>
    import ProductPage from "../1/ProductPage.svelte";

    export let data;
</script>

<ProductPage
        title="Fences"
        description="super nice fences"
        headline="Fences"
        image="/pages/fences/front.jpg"
        imageDatas={data.imageDatas}
/>