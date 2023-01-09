<script>
    import Page from "./Page.svelte";
    import { fly } from 'svelte/transition';
    import { page } from '$app/stores'

    export let data;

    function getSubIndex() {
        const urlSc = $page.url.searchParams.get('sc')
        const foundSc = data["subcategories"].findIndex(sc => sc.name === urlSc)
        return foundSc === -1 ? 0 : foundSc
    }

    let subIndex = getSubIndex()
</script>

<Page seoTitle={data.seoTitle} seoDescription={data.seoDescription}>
    <div class="relative h-[18.75rem] md:h-[35rem]">
        <img class="relative object-cover w-full h-full" src={data.image} alt="">
        <div class="top-0 w-full h-full absolute bg-clr1/50"></div>
        <h1 class="md:text-[5rem] md:top-[44.5%] w-full text-center absolute top-[50%] translate-y-[-50%] md:translate-y-0 font-poppins font-bold text-[3rem] text-clr2">{data.title}</h1>
    </div>
    {#if data.subcategories.length > 1}
        <div class="font-poppins text-clr2 flex justify-center items-center pt-10 gap-10">
            {#each data.subcategories as subcategory, i}
                <button on:click={() => {
                    subIndex = i
                    history.replaceState(history.state, "", `?sc=${subcategory.name}`);
                }} class="{i === subIndex ? "bg-white text-clr3" : ""} transition-colors duration-200 border-clr2 border-2 rounded-xl px-5 py-3">{subcategory.name}</button>
            {/each}
        </div>
    {/if}
    {#key subIndex}
        <div class="flex flex-wrap justify-center py-10 w-[25rem] lg:w-[52.5rem] xl:w-[80rem] mx-auto gap-10"
             in:fly|local="{{ x: 25, duration: 500, delay: 500 }}"
             out:fly|local="{{ x: -25, duration: 500 }}">
            {#each data.subcategories[subIndex]["products"] as product}
                <a href="#/" class="w-[25rem] relative rounded-2xl group">
                    <div class="w-full h-[20rem] rounded-3xl overflow-hidden border-2 border-clr4 relative">
                        <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={product.link} loading="lazy" alt="">
                        <div class="absolute w-full h-full top-0 transition-colors duration-300 group-hover:group-hover:group-hover:group-hover:bg-clr3/40"></div>
                    </div>
                    <div class="w-full font-poppins text-clr2 font-semibold text-[1.3rem] py-2 text-center">
                        {product.sku}
                    </div>
                    <div class="w-14 mx-auto border-t-2 border-clr4"></div>
                </a>
            {/each}
        </div>
    {/key}
</Page>