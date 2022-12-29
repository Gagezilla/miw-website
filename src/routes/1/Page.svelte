<script>
    import { fly } from 'svelte/transition';
    export let title;
    export let description;

    const url = "https://monarchironworks.com/"
    const image = url + "pages/gates/front.jpg"
    const newTitle = "Monarch Ironworks | " + title
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{newTitle}</title>
    <meta name="title" content={newTitle}>
    <meta name="description" content={description}>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content={url}>
    <meta property="og:title" content={newTitle}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content={image}>

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content={url}>
    <meta property="twitter:title" content={newTitle}>
    <meta property="twitter:description" content={description}>
    <meta property="twitter:image" content={image}>
</svelte:head>

<main in:fly="{{ x: 25, duration: 500, delay: 500 }}"
      out:fly="{{ x: -25, duration: 500 }}">
    <slot/>
</main>