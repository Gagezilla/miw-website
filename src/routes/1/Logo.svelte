<script>
    export let direction;

    export let color;
</script>

{#if direction === "right"}
    <a href="/" class="w-fit flex items-center justify-between gap-3 {$$props.class}">
        <img class="w-[5.5rem]" src="/pages/logo-{color}.png" alt="">
        <div class="flex flex-col text-center font-poppins">
            <span class="font-semibold text-[1.4rem]">Monarch</span>
            <span class="font-semibold text-[1rem]">Ironworks</span>
        </div>
    </a>
{:else if direction === "center"}
    <a href="/" class="px-[1.5rem] w-fit flex flex-col items-center font-poppins {$$props.class}">
        <span class="font-semibold text-[1.85rem]">Monarch</span>
        <img class="w-[8.5rem]" src="/pages/logo-{color}.png" alt="">
        <span class="font-semibold text-[1.5rem]">Ironworks</span>
    </a>
{/if}