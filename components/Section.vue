<template>
    <section>
        <div class="header-body">
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, perferendis est, dolore odio autem
                    praesentium ipsum, quia commodi unde dolor laborum voluptate dignissimos aut quas amet eos aliquid.
                    Iure, ad. </p>
                <div class="mt-5 btn-block">
                    <button class="btn-car">Découvrez le modèle Green X</button>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
section {
    min-height: 25em;
    background-image: url("./assets/img/test.jpg");
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