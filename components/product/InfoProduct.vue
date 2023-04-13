<template>
    <section class="services dark:bg-gray-900">
        <div class="title-info">
            <h2 class="text-5xl mt-3 font-black">Un concentré d'émotion</h2>
            <p class="p-5">Prenez place à bord de la PEUGEOT 208. Son poste de conduite de dernière génération et ses sièges avant dynamiques vous conduisent vers de nouvelles sensations. </p>
        </div>
        <div class="infos">
            <div class="info">
                <div class="svg">
                    <img src="@/assets/img/headset.svg" alt="icone d'accompagnement">
                </div>
                <h3 class="font-bold">Un accompagnement à chaque instant</h3>
            </div>

            <div class="info">
               <div class="svg">
                    <img src="@/assets/img/truck.svg" alt="icone de livrison">
                </div>
                <h3 class="font-bold">Livraison partout en France</h3>
            </div>

            <div class="info">
                <div class="svg">
                    <img src="@/assets/img/sale.svg" alt="icone d'offre">
                </div>
                <h3 class="font-bold">Profitez des offres</h3>
            </div>
        </div>
    </section>
</template>



<style scoped>


.title-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

}

.title{
    border-bottom: 1px solid #000;
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
    padding: 1.3em 3em 1.3em 3em;
    border: none;
    cursor: pointer;
    background-color: #0074e8;
    color: #eee;
    font-family: 'Montserrat';
}
</style>