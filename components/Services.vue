<template>
    <section class="services">
        <h2 class="title">Nos services</h2>
        <div class="infos">
            <div class="info">
                <div class="svg">
                    <img src="@/assets/img/headset.svg" alt="icone d'accompagnement">
                </div>
                <h3>Un accompagnement à chaque instant</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div class="info">
               <div class="svg">
                    <img src="@/assets/img/truck.svg" alt="icone de livrison">
                </div>
                <h3>Livraison partout en France</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div class="info">
                <div class="svg">
                    <img src="@/assets/img/sale.svg" alt="icone d'offre">
                </div>
                <h3>Profitez des offres</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>

        <div class="infos-btn">
            <button class="btn">Découvrez le modèle Green X</button>
            <button class="btn">Découvrez le modèle Green X</button>
        </div>
    </section>
</template>



<style scoped>

.title{
    border-bottom: 1px solid #000;
    padding-bottom: 0.5em;
   
}
.services{
    padding: 2.5em;
    background-color: #eee;
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