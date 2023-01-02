<script>
    import Page from "./Page.svelte";

    export let title;
    export let description;
    export let headline;
    export let image;
    export let imageDatas;
</script>

<Page {title} {description}>
    <div class="relative h-[18.75rem] md:h-[35rem]">
        <img class="relative object-cover w-full h-full" src={image} alt="">
        <div class="top-0 w-full h-full absolute bg-clr1/50"></div>
        <h1 class="md:text-[5rem] md:top-[44.5%] w-full text-center absolute top-[50%] translate-y-[-50%] md:translate-y-0 font-poppins font-bold text-[3rem] text-clr2">{headline}</h1>
    </div>
    <slot/>
    <div class="flex flex-wrap justify-center py-10 w-[80rem] mx-auto gap-10">
        {#each imageDatas as data, i}
            <a class="w-[25rem] relative rounded-2xl group">
                <div class="w-full h-[20rem] rounded-3xl overflow-hidden border-2 border-clr4 relative">
                    <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={data.link} alt="">
                    <div class="absolute w-full h-full top-0 transition-colors duration-300 group-hover:group-hover:group-hover:group-hover:bg-clr3/40"></div>
                </div>
                <div class="w-full font-poppins text-clr2 font-semibold text-[1.3rem] py-2 text-center">
                    {data.sku}
                </div>
                <div class="w-14 mx-auto border-t-2 border-clr4"></div>
            </a>
        {/each}
    </div>
</Page>