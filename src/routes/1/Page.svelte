<script>
    import { fly } from 'svelte/transition';
    export let seoTitle;
    export let seoDescription;

    const url = "https://monarchironworks.com/"
    const image = url + "pages/gates/fences.jpg"
    const title = "Monarch Ironworks | " + seoTitle
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title}>
    <meta name="description" content={seoDescription}>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content={url}>
    <meta property="og:title" content={title}>
    <meta property="og:description" content={seoDescription}>
    <meta property="og:image" content={image}>

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content={url}>
    <meta property="twitter:title" content={title}>
    <meta property="twitter:description" content={seoDescription}>
    <meta property="twitter:image" content={image}>
</svelte:head>

<main in:fly="{{ x: 25, duration: 500, delay: 500 }}"
      out:fly="{{ x: -25, duration: 500 }}">
    <slot/>
</main>