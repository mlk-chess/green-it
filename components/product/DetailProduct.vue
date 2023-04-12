<template>
    <section class="bg-white dark:bg-gray-950">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <nuxt-img format="avif" lazy="loading" class="img-container rounded" :src="$t('callouts.0.imageSrc')" :alt="$t('callouts.0.imageAlt')"></nuxt-img>
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{  $t('callouts.0.name') }}</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{{ $t('callouts.0.description') }}</p>
            </div>
        </div>

        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{ $t('callouts.1.name') }}</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{{ $t('callouts.1.description') }}</p>
            </div>
             <nuxt-img format="avif" lazy="loading" class="img-container rounded" :src="$t('callouts.1.imageSrc')" :alt="$t('callouts.1.imageAlt')"></nuxt-img>
        </div>

         <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <nuxt-img format="avif" lazy="loading" class="img-container rounded" :src="$t('callouts.2.imageSrc')" :alt="$t('callouts.2.imageAlt')"></nuxt-img>
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{ $t('callouts.2.name') }}</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{{ $t('callouts.2.description') }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const callouts = [
    {
        name: 'Son immersif',
        description: 'Un système audio de 960 watts à 22 haut-parleurs avec Réduction active du bruit de la route offre une écoute immersive et un son de qualité studio.',
        imageSrc: '/car-interior1.jpeg',
        imageAlt: 'car interior 1 immersive sound',
        href: '#',
    },
    {
        name: 'Restez connecté',
        description: 'Connectez vos appareils instantanément grâce au Bluetooth supportant plusieurs connexions simultanées, ou rechargez rapidement vos appareils en tirant parti de la recharge sans fil et USB-C 36 W.',
        imageSrc: '/car-interior2.jpeg',
        imageAlt: 'Car interior 2 devices',
        href: '#',
    },
    {
        name: 'Style élégant',
        description: 'Une ligne emblématique combinées à d\'élégantes proportions modernisées.',
        imageSrc: '/car-interior3.jpeg',
        imageAlt: 'Beautiful car interior 3',
        href: '#',
    },
]
</script>