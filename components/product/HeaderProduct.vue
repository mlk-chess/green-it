<template>
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-screen">
        <nuxt-img format="avif" src="/header-product.jpeg" alt=""
            class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"></nuxt-img>

        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Green S</h2>
                <!-- <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute.</p> -->
                <button
                    class="mt-20 bg-transparent hover:bg-gray-300 text-white font-semibold hover:text-gray py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                    {{ $t('buy') }}
                </button>
            </div>
        </div>
    </div>
</template>