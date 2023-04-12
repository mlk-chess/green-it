<template>
    <section class="about">

        <section class="bg-white dark:bg-gray-950">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
               <nuxt-img format="avif" lazy="loading" class="img-container rounded" src="/header.jpg" alt="une voiture rouge en pleine vitesse"></nuxt-img>
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Green CAR,<br/>100% éléctrique</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Faciles à recharger, extraordinairement agréables à conduire, nos models 100% électriques associent énergie respectueuse de l'environnement, conduite d’une précision exceptionnelle, finitions de qualité et design dynamique.</p>
                </div>
            </div>


             <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Green CAR,<br/>Zéro émission</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Quinze années de recherche ont permis de développer une motorisation électrique n'émettant aucune émission de CO2. Notre objectif : faire du monde un endroit plus propre, tout en conférant à votre mobilité un luxe et un caractère incomparables. Alors que vous êtes le maître d'un moteur ultra perfectionné, le monde devient un endroit plus propre.</p>
                </div>

                 <nuxt-img format="avif" lazy="loading" class="rounded" src="/header.jpg" alt="une voiture rouge en pleine vitesse"></nuxt-img>
            </div>
        </section>

    </section>


    
</template>


<style scoped>
    .about h2{
        font-size: 2em;
        padding-left: 1.2em;
        border-left: 0.1em #0074e8 solid;
    }

</style>