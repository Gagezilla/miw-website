<script>
    import { Icon } from '@steeze-ui/svelte-icon'
    import { Bars3 } from '@steeze-ui/heroicons'
    import { page } from '$app/stores';
    import { clickOutside } from 'svelte-use-click-outside';

    $: {
        $page.url.pathname;
        closeMenu();
    }

    function closeMenu() {open = false;}
    function toggleMenu() {open = !open;}

    let open = false;
</script>

<header class="md:justify-center w-full flex absolute p-5 justify-end z-50">
    <div class="relative" use:clickOutside={closeMenu}>
        <button on:click={toggleMenu} class="p-1 rounded-xl border-clr2 border-2 md:hidden">
            <Icon src="{Bars3}" size="45" class="text-clr2" />
        </button>
        <ul class="{open ? 'transition-opacity duration-150' : 'opacity-0 pointer-events-none'}
        md:border-0
        border-2
        border-clr4
        md:gap-4
        md:static
        md:flex
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
            <li><a class="block p-2 md:p-4" href="/">Home</a></li>
            <li><a class="block p-2 md:p-4" href="/gates">Gates</a></li>
            <li><a class="block p-2 md:p-4" href="/railings">Railings</a></li>
            <li><a class="block p-2 md:p-4" href="/railings">Balconies</a></li>
            <li><a class="block p-2 md:p-4" href="/fences">Fences</a></li>
            <li><a class="block p-2 md:p-4" href="/about-us">About Us</a></li>
            <li><a class="block p-2 md:p-4 md:border-2 md:rounded-xl" href="">Contact Us</a></li>
        </ul>
    </div>
</header>