<template>
    <section>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-200 text-center">L'intérieur du futur</h2>

                <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 dark:text-white">
                    <div v-for="callout in callouts" :key="callout.name" class="group relative">
                        <div
                            class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <nuxt-img format="avif" :src="callout.imageSrc" :alt="callout.imageAlt"
                                class="h-full w-full object-cover object-center"></nuxt-img>
                        </div>
                        <div class="">
                            <h3 class="mt-6 text-sm text-gray-500 dark:text-gray-300">
                                <a :href="callout.href">
                                    <span class="absolute inset-0" />
                                    {{ callout.name }}
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900 dark:text-white">{{ callout.description }}</p>
                        </div>
                    </div>
                </div>
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