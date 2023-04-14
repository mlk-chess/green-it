<template>
    <section class="services bg-gray-100 dark:bg-gray-900">
        <h2 class="title text-4xl dark:text-white text-center">{{ $t("i3") }}</h2>
        <div class="products">
            <div class="m-2 max-w-sm rounded-lg">
                  <div style="min-height:15rem">
                <img loading=”lazy” class="rounded-t-lg" src="/featured3.webp" alt="Présentation de la voiture Green X"/></div>
                <div class="p-5">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GREEN X</h3>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ $t("i4") }}</p>
                    <router-link to="/product"><button class="btn-car">{{ $t("i5") }}</button></router-link>
                </div>
            </div>

            <div class="m-2 max-w-sm  rounded-lg">
                <div style="min-height:15rem">
                <img loading=”lazy” class="rounded-t-lg img" src="/featured-2.webp" alt="Présentation de la voiture Green Y"/>
                </div>
                <div class="p-5">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GREEN Y</h3>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ $t("i4") }}</p>
                    <router-link to="/product"><button class="btn-car">{{ $t("i5") }}</button></router-link>
                </div>
            </div>
            <div class="m-2 max-w-sm rounded-lg">
                  <div style="min-height:15rem">
                <img loading=”lazy” class="rounded-t-lg" src="/featured.webp" alt="Présentation de la voiture Green S"/></div>
                <div class="p-5">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GREEN S</h3>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ $t("i4") }}</p>
                    <router-link to="/product"><button class="btn-car">{{ $t("i5") }}</button></router-link>
                  
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