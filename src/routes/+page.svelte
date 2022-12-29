<script>
    import Page from "./COMPS/Page.svelte";
    import Section from "./COMPS/Section.svelte";
</script>

<Page title="Home" description="super good home page for monarch iron works">
    <div class="relative h-[18.75rem] md:h-[30rem]">
        <img class="relative object-cover w-full h-full" src="/pages/home/front.png" alt="">
        <div class="top-0 w-full h-full absolute bg-clr1/50"></div>
        <h1 class="md:text-[3rem] md:top-[43.5%] w-full text-center absolute top-[40%] font-poppins font-bold text-[2rem] text-clr2">We build your Gates,<br>Railings and Fences</h1>
    </div>
    <Section title="Details Matter" type="light" titleSize="2rem">
        <p class="font-poppins px-8 py-14 text-center text-[.9rem] max-w-[50rem] md:text-[1rem] md:mx-auto">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
    </Section>
    <Section title="Our Services" type="dark" titleSize="2rem"/>
    <Section title="What they say about us" type="light" titleSize="2rem"/>
    <Section title="Have a project in mind? Let’s make it happen!" type="dark" titleSize="1.5rem"/>
</Page>