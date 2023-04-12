

<template>

        <section class="bg-white dark:bg-gray-950">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <div class="video">
                    <video class="rounded-lg" controls>
                        <source src="/video/video-car.mp4" type="video/mp4">
                        Votre navigateur ne supporte pas la lecture de cette vidéo.
                    </video>
                </div>
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{ $t('autonomy') }},<br/>{{ $t('travel') }}</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{{ $t('traveldesc') }}</p>
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

</style>