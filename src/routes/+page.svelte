<script>
    import Page from "./1/Page.svelte";
    import Section from "./1/Section.svelte";
</script>

<Page seoTitle="Home" seoDescription="super good home page for monarch iron works">
    <div class="relative h-[25rem] md:h-[35rem]">
        <img class="relative object-cover w-full h-full" src="/pages/home/front.png" alt="">
        <div class="top-0 w-full h-full absolute bg-clr1/40"></div>
        <h1 class="md:text-[4rem] top-[44%] w-full text-center absolute font-poppins font-bold text-[3rem] text-clr2">
            You Dream It,<br>We Build It
        </h1>
    </div>
    <Section title="Details Matter" type="light" class="text-[2rem]">
        <p class="font-poppins px-8 py-14 text-center text-[.9rem] max-w-[50rem] md:text-[1rem] md:mx-auto">
            Our gates, railings, balconies, and fences are made of the
            finest wrought iron. Not only are our finished products
            truly beautiful, but all of them will be hand-crafted to
            meet your specific requirements.
            <br><br>
            If you need a truly "one-of-a-kind" custom gate, railing,
            balcony, or fence for your residence or place of business
            then you should consider having Monarch Ironworks assist
            you in its design and construction.
            <br><br>
            Monarch Ironworks employs over 30 master metal fabricators
            all of whom have more than a decade of experience crafting
            wrought iron.
            <br><br>
            Please feel free to select any of our designs or submit your
            own design and we will provide you with an estimate. If you
            then decide to proceed, we will send you a CAD drawing of that
            design for you to review, make changes if needed, or approve
            for production.
        </p>
        <div class="h-[10rem] md:h-[15rem] flex justify-center overflow-x-hidden">
            <div class="flex justify-center gap-6">
                <div class="h-full w-[12rem] md:w-[20rem]"><img class="w-full h-full object-cover rounded-3xl" src="/pages/home/details-1.png" alt=""></div>
                <div class="h-full w-[12rem] md:w-[20rem]"><img class="w-full h-full object-cover rounded-3xl" src="/pages/home/details-2.png" alt=""></div>
                <div class="h-full w-[12rem] md:w-[20rem]"><img class="w-full h-full object-cover rounded-3xl" src="/pages/home/details-3.png" alt=""></div>
            </div>
        </div>
    </Section>
    <Section title="Custom Products" type="dark" class="text-[2rem]">
        <div class="flex flex-col md:flex-row justify-center items-center pt-20 gap-16 px-12">
            <div class="text-center max-w-[26rem] flex flex-col gap-8 items-center font-poppins">
                <img class="w-[9rem] h-[9rem]" src="/pages/home/gate.svg" alt="">
                <h3 class="text-[1.7rem] font-semibold">Custom Gates</h3>
                <p class="text-clr5 text-[.9rem] md:text-[1rem] md:mx-auto">
                    At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores
                </p>
            </div>
            <div class="text-center max-w-[26rem] flex flex-col gap-8 items-center font-poppins">
                <img class="w-[9rem] h-[9rem]" src="/pages/home/fence.svg" alt="">
                <h3 class="text-[1.7rem] font-semibold">Custom Fences</h3>
                <p class="text-clr5 text-[.9rem] md:text-[1rem] md:mx-auto">
                    At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores
                </p>
            </div>
            <div class="text-center max-w-[26rem] flex flex-col gap-8 items-center font-poppins">
                <img class="w-[9rem] h-[9rem]" src="/pages/home/railing.svg" alt="">
                <h3 class="text-[1.7rem] font-semibold">Custom Railings</h3>
                <p class="text-clr5 text-[.9rem] md:text-[1rem] md:mx-auto">
                    At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores
                </p>
            </div>
        </div>
    </Section>
    <Section title="What they say about us" type="light" class="text-[2rem]">
        <div class="px-8 font-poppins mx-auto max-w-[40rem]">
            <div class="mt-16 mb-2 flex items-center h-[4rem] gap-6">
                <img class="rounded-full h-full border-2 border-clr1" src="/pages/home/avatar.png" alt="">
                <div class="flex flex-col">
                    <span class="font-bold text-[1.4rem]">Darren JONES</span>
                    <span class="text-[1.4rem] text-clr5">Windsor, CO</span>
                </div>
            </div>
            <div class="text-[5rem] h-[4rem]">"</div>
            <p class="text-clr5 text-[.9rem] md:text-[1rem] text-center">
                Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio
                cumque nihil impedit quo minus id quod maxime placeat
                facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus. Temporibus autem quibusdam et aut
                officiis debitis aut rerum necessitatibus saepe.
            </p>
            <div class="text-right text-[5rem] h-[3rem]">"</div>
        </div>
    </Section>
    <div id="contact-us"></div>
    <Section title="Have a project in mind? How can we help?" type="dark" class="text-[1.5rem] md:text-[2rem]">
        <form on:submit|preventDefault={()=>{}} method="post" class="flex flex-col gap-6 pt-14 px-10 mx-auto max-w-[50rem] font-poppins text-clr4">
            <div class="flex flex-col md:flex-row gap-6">
                <div class="flex flex-col gap-2 w-full">
                    <label for="name">Your name</label>
                    <input class="px-3 bg-transparent rounded-lg border-2 border-clr4 h-[3rem]" type="text" id="name" name="user_name" />
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="email">Your email</label>
                    <input class="px-3 bg-transparent rounded-lg border-2 border-clr4 h-[3rem]" type="email" id="email" name="user_email" />
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="details">How can we help you?</label>
                <textarea class="p-3 bg-transparent rounded-lg border-2 border-clr4 h-[10rem]" id="details" name="user_details"></textarea>
            </div>
            <button class="bg-clr4 text-clr3 font-medium h-[3rem] rounded-lg">Send Message</button>
        </form>
    </Section>
</Page>