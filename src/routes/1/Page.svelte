<script>
    export let title;
    export let description;

    const url = "https://monarchironworks.com/"
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
    <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content={url}>
    <meta property="twitter:title" content={newTitle}>
    <meta property="twitter:description" content={description}>
    <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
</svelte:head>

<main>
    <slot/>
</main>