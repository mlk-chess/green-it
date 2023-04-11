<template>
    <section class="flex flex-row-reverse sm:flew-col dark:text-white">
        <div class="flex flex-col flex-wrap ml-5 mt-10 w-4/12 video-content">
            <span class="text-lg">{{ $t('autonomy') }}</span>
            <span class="text-xl subpixel-antialiased mb-8 font-bold">{{ $t('travel') }}</span>
            <p class="text-sm">{{ $t('traveldesc') }}</p>
        </div>
        <div class="w-8/12 video">
            <video controls>
                <source src="/video/video-car.mp4" type="video/mp4">
                Votre navigateur ne supporte pas la lecture de cette vidéo.
            </video>
        </div>
    </section>
</template>

<style scoped>

@media (max-width:1024px) {
    section {
        flex-direction: column-reverse;
    }
    .video{
        width: 100%;
    }
    
    .video-content {
        margin: auto;
        width: auto;
        justify-content: center;
        align-items: center;
    }
}
</style>