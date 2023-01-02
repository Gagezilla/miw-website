<script>
    import ProductPage from "../1/ProductPage.svelte";

    export let data;
</script>

<ProductPage
        title="Railings"
        description="super nice railings"
        headline="Railings"
        image="/pages/railings/front.jpg"
        imageDatas={data.imageDatas}
/>