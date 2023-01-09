<script>
    export let title;
    export let type;
</script>

<div class="py-14 {type==='dark'?'text-clr2 bg-clr3':'text-clr1 bg-clr2'}">
    <div class="flex flex-col items-center">
        <h2 class="{$$props.class} font-poppins font-bold max-w-[20rem] md:max-w-[25rem] text-center">{title}</h2>
        <div class="w-14 mt-4 rounded-xl border-t-4 {type==='dark'?'border-clr2':'border-clr1'}"></div>
    </div>
    <slot/>
</div>