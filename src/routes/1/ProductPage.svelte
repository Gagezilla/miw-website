<script>
    import Page from "./Page.svelte";

    export let title;
    export let description;
    export let headline;
    export let image;
    export let imageLinks;
</script>

<Page {title} {description}>
    <div class="relative h-[18.75rem] md:h-[35rem]">
        <img class="relative object-cover w-full h-full" src={image} alt="">
        <div class="top-0 w-full h-full absolute bg-clr1/50"></div>
        <h1 class="md:text-[5rem] md:top-[44.5%] w-full text-center absolute top-[50%] translate-y-[-50%] md:translate-y-0 font-poppins font-bold text-[3rem] text-clr2">{headline}</h1>
    </div>
    <slot/>
    <div class="flex flex-wrap justify-center py-10 w-[80rem] mx-auto gap-10">
        {#each imageLinks as url}
            <a href="/" class="w-[25rem] h-[20rem] rounded-2xl overflow-hidden transition-colors border-transparent hover:border-clr2 border-[3px] relative">
                <img class="w-full h-full object-cover p-1 rounded-2xl" src={url} alt="">
                <div class="absolute w-full h-full top-0 flex flex-col">
                    <div class="h-full border-t-[.25rem] border-x-[.25rem] border-clr2/50 rounded-t-2xl">

                    </div>
                    <div class="bg-clr2/50 font-poppins text-clr3 font-semibold text-[1.1rem] py-2 text-center">
                        Gate EL1001
                    </div>
                </div>
            </a>
        {/each}
    </div>
</Page>