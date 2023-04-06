<template>
    <section class="products">
        <h2 class="title">Découvrez nos modèles GREEN</h2>
        <div class="cars">
            <div class="card">
                <nuxt-img loading="lazy" format="avif" src="/car1.jpg" alt="Présentation de la voiture green X"/>
                <h2>Green X</h2>
                
            </div>
             <div class="card">
                <nuxt-img loading="lazy" format="avif" src="/car2.jpg" alt="Présentation de la voiture green S"/>
                <h2>Green S</h2>
            </div>
             <div class="card">
                <nuxt-img loading="lazy" format="avif" src="/car3.jpg" alt="Présentation de la voiture green TTR"/>
                <h2>Green TTR</h2>
            </div>
        </div>
    </section>
</template>
<style scoped>

.card{
    flex: 1 1 17rem;
    position: relative;
    height: 200px;
}

.card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.card h2 {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 0.5rem;
    border-radius: 5px;
}

.products{
    padding: 2.5em;
}

.title{
    border-bottom: 2px solid #eee;
    width: 100%;
    padding-bottom: 0.5em;
   
}

.cars{
    margin-top: 4em;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

</style>