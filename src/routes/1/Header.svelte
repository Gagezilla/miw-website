<script>
    import { Icon } from '@steeze-ui/svelte-icon'
    import { Bars3 } from '@steeze-ui/heroicons'
    import { page } from '$app/stores';
    import { clickOutside } from 'svelte-use-click-outside';
    import Logo from "./Logo.svelte";

    $: {
        $page.url.pathname;
        closeMenu();
    }

    function closeMenu() {open = false;}
    function toggleMenu() {open = !open;}

    let open = false;
</script>

<header class="md:justify-center w-full flex absolute p-5 justify-end z-50">
    <nav class="relative" use:clickOutside={closeMenu}>
        <button on:click={toggleMenu} class="p-1 rounded-xl border-clr2 border-2 md:hidden">
            <Icon src="{Bars3}" size="45" class="text-clr2" />
        </button>
        <ul class="{open ? 'transition-opacity duration-150' : 'opacity-0 pointer-events-none'}
        md:border-0
        border-2
        border-clr4
        md:static
        md:flex
        md:justify-between
        md:items-center
        md:min-w-[60rem]
        md:text-clr2
        md:bg-transparent
        md:mt-0
        md:opacity-100
        md:pointer-events-auto
        absolute
        bg-white
        right-0
        mt-3
        p-4
        rounded-xl
        min-w-[15rem]
        font-poppins
        text-center
        text-[1.1rem]">
            <li><Logo right /></li>
            <li>
                <ul class="flex flex-col py-4 md:flex-row">
                    <li><a class="block p-2 md:p-4 transition-colors duration-200 md:hover:text-clr2/60" href="/product-categories/railings">Railings</a></li>
                    <li><a class="block p-2 md:p-4 transition-colors duration-200 md:hover:text-clr2/60" href="/product-categories/gates">Gates</a></li>
                    <li><a class="block p-2 md:p-4 transition-colors duration-200 md:hover:text-clr2/60" href="/product-categories/fences">Fences</a></li>
                </ul>
            </li>
            <li><a class="block p-2 md:p-4 transition-colors duration-200 border-clr2 md:border-2 md:rounded-xl md:hover:bg-clr2 md:hover:text-clr3 font-semibold" href="#/">Get A Free Quote</a></li>
        </ul>
    </nav>
</header>