<template>
    <section class="services bg-gray-100 dark:bg-gray-900 dark:text-white">
        <h2 class="title text-4xl dark:text-white text-center">{{$t("i12")}}</h2>
        <div class="infos">
            <div class="info">
                <div class="svg">
                    <img src="@/assets/img/headset.svg" loading=”lazy” alt="icone d'accompagnement">
                </div>
                <h3 class="text-2xl font-bold">{{$t("i13")}}</h3>
                <p class="text-sm text-gray-400">{{ $t("i14") }}</p>
            </div>

            <div class="info">
               <div class="svg">
                    <img src="@/assets/img/truck.svg" loading=”lazy” alt="icone de livrison">
                </div>
                <h3 class="text-2xl font-bold">{{$t("i15")}}</h3>
                <p class="text-sm text-gray-400">{{$t("i16")}}</p>
            </div>

            <div class="info">
                <div class="svg">
                    <img src="@/assets/img/sale.svg" loading=”lazy” alt="icone d'offre">
                </div>
                <h3 class="text-2xl font-bold">{{$t("i17")}}</h3>
                <p class="text-sm text-gray-400">{{$t("i18")}}</p>
            </div>
        </div>

        <div class="infos-btn">
            <button class="btn">{{$t("i19")}}</button>
            <button class="btn">{{ $t("i20") }}</button>
        </div>
    </section>
</template>



<style scoped>

.title{
    padding-bottom: 0.5em;
   
}
.services{
    padding: 2.5em;
}
.infos, .infos-btn{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 50px;
}

.svg{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 30px;
}

.info{
    width: 20rem;
}

.info h3{
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
}

.info p {
    text-align: center;
}


.btn{
    padding: 0.7em 1.7em 0.7em 1.7em;
    border: none;
    cursor: pointer;
    background-color: #0074e8;
    color: #eee;
    font-family: 'Montserrat';
}
</style>