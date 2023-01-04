<script>
    import ProductPage from "../../1/ProductPage.svelte";

    export let data;
</script>

{#key data}
    <ProductPage {data}/>
{/key}