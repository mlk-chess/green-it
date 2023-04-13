

<template>
        <section class="h-screen bg-gray-100 dark:bg-gray-950">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="">
                    <nuxt-img format="avif" loading=”lazy” src="./featured3.png" alt="Caractéristiques de la Green X"></nuxt-img>
                    <div class="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                                <div class="flex flex-col items-center justify-center">
                                    <dt class="mb-2 text-xl md:text-3xl">430km</dt>
                                    <dd class="font-light text-gray-500 dark:text-gray-400">Autonomie</dd>
                                </div>
                                <div class="flex flex-col items-center justify-center">
                                    <dt class="mb-2 text-xl md:text-3xl">217km/h</dt>
                                    <dd class="font-light text-gray-500 dark:text-gray-400">Vitesse maximale</dd>
                                </div>
                                <div class="flex flex-col items-center justify-center">
                                    <dt class="mb-2 text-xl md:text-3xl">6,9s</dt>
                                    <dd class="font-light text-gray-500 dark:text-gray-400">0 à 100 km/h</dd>
                                </div>
                            </dl>
                        </div>
                </div>
                <div class="mt-4 md:mt-0 h-100 overflow-hidden overflow-y-auto p-3 text-center ">
                   <h1 class="text-4xl font-bold dark:text-white">Green X</h1>
                


                     <div class="details">
                        <h3 class="text-2xl font-black text-jutify dark:text-white">Points clés</h3>
                        <div class="mt-5 text-gray-500">
                            <li>Jantes Induction 20"</li>
                            <li>Intérieur entièrement en noir Premium</li>
                            <li>Habitacle 5 sièges</li>
                            <li>Capacité de conduite entièrement autonome</li>
                        </div>
                    </div>

                    <div class="details">
                        <h3 class="text-2xl font-black dark:text-white">Détails du véhicule</h3>
                        <div class="mt-4">
                            <p class="dark:text-white">Pays d'immatriculation</p>
                            <span class="text-gray-500">FR</span>
                        </div>
                        <div class="mt-4">
                            <p class="dark:text-white">Date de première mise en circulation</p>
                            <span class="text-gray-500">17 nov. 2022</span>
                        </div>
                    </div>

                    <button class="btn-car details">Procéder au paiement</button>
                </div>
            </div>
        </section>


    
</template>

<style scoped>


    h2{
        font-size: 2em;
        padding-left: 1.2em;
        border-left: 0.1em #0074e8 solid;
    }

    .details{
        margin-top: 4rem;
    }
    .btn-car {
    
    padding: 1em 2em 1em 2em;
    border: none;
    cursor: pointer;
    background-color: #0074e8;
    color: #eee;
    font-family: 'Montserrat';

}

</style>