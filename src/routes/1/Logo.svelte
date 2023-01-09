<script>
    export let right = false;
</script>

{#if right}
    <a href="/" class="w-fit flex items-center gap-2 {$$props.class}">
        <img class="w-[5.5rem]" src="/pages/logo.png" alt="">
        <div class="flex flex-col">
            <span class="font-semibold text-[1.4rem]">Monarch</span>
            <span class="font-semibold text-[1rem]">Ironworks</span>
        </div>
    </a>
{:else}
    <a href="/" class="px-[1.5rem] w-fit flex flex-col items-center {$$props.class}">
        <span class="font-semibold text-[1.85rem]">Monarch</span>
        <img class="w-[8.5rem]" src="/pages/logo.png" alt="">
        <span class="font-semibold text-[1.5rem]">Ironworks</span>
    </a>
{/if}