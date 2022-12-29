<script>
    import Page from "./Page.svelte";

    export let title;
    export let description;
    export let headline;
    export let image;
</script>

<Page {title} {description}>
    <div class="relative h-[18.75rem] md:h-[35rem]">
        <img class="relative object-cover w-full h-full" src={image} alt="">
        <div class="top-0 w-full h-full absolute bg-clr1/50"></div>
        <h1 class="md:text-[5rem] md:top-[44.5%] w-full text-center absolute top-[50%] translate-y-[-50%] md:translate-y-0 font-poppins font-bold text-[3rem] text-clr2">{headline}</h1>
    </div>
    <slot/>
</Page>