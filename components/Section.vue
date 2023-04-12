<template>
    <section>
        <div class="header-body">
            <div>
                <p>Grâce à nos models GREEN combinez puissance et écologie. Vous pouvez dès maintenant faire le choix de changer le monde.</p>
                <div class="mt-5 btn-block">
                    <button class="btn-car">En savoir plus</button>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
section {
    min-height: 25em;
    background-image: url("./assets/img/test.avif");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

section::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
}

.header-body {
    padding: 2.5em;
    z-index: 1;
    color: #eee;
}

.header-body p {
    max-width: 30em;
    text-align: center;
}

.menu-btn {
    display: none;
}

.btn-car {
    padding: 1.3em 3em 1.3em 3em;
    border: none;
    cursor: pointer;
    background-color: #eee;
    color: #000;
    font-family: 'Montserrat';
}

.btn-block{
    display: flex;
    justify-content: center;
}
</style>