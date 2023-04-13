<template>
    <section class="services bg-gray-100 dark:bg-gray-900">
        <h2 class="title">Nos offres</h2>
        <div class="products">
            <div class="m-2 max-w-sm rounded-lg">
                  <div style="min-height:15rem">
                <nuxt-img format="avif" class="rounded-t-lg" src="/featured3.png" alt="Présentation de la voiture Green X"></nuxt-img></div>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GREEN X</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">à partir de 190€/mois</p>
                     <button class="btn-car"><router-link to="/product">Découvrez le modèle Green X</router-link></button>
                </div>
            </div>

            <div class="m-2 max-w-sm  rounded-lg">
                <div style="min-height:15rem">
                <nuxt-img format="avif" class="rounded-t-lg img" src="/featured4.png" alt="Présentation de la voiture Green Y"></nuxt-img>
                </div>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GREEN Y</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">à partir de 190€/mois</p>
                    <button class="btn-car"><router-link to="/product">Découvrez le modèle Green X</router-link></button>
                </div>
            </div>
            <div class="m-2 max-w-sm rounded-lg">
                  <div style="min-height:15rem">
                <nuxt-img format="avif" class="rounded-t-lg" src="/featured2.png" alt="Présentation de la voiture Green S"></nuxt-img></div>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GREEN S</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">à partir de 190€/mois</p>
                    <button class="btn-car"><router-link to="/product">Découvrez le modèle Green X</router-link></button>
                  
                </div>
            </div>
            
        </div>
    </section>

    
</template>
<style scoped>

.btn-car {
    
    padding: 1em 2em 1em 2em;
    border: none;
    cursor: pointer;
    background-color: #0074e8;
    color: #eee;
    font-family: 'Montserrat';

}
.services{
    padding: 2.5em;
}
.title{
    padding-bottom: 3em;
}

.products{
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

</style>