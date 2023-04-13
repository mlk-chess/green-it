<template>
    <header>
        <div class="header-body">
            <div>
                <h1 class="text-4xl font-bold text-center">Green X</h1>
                <div class="mt-5">
                    <button class="btn-car">{{ $t("i2") }}</button>
                </div>
            </div>
        </div>
    </header>
</template>


<style scoped>

header {
    height: 100vh;
    min-height: 40em;
    background-image: url("./assets/img/header.avif");
    background-size: cover;
    display: flex;
    flex-direction: column;
    position: relative;
}

header::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
}

.header-body {
    padding: 2.5em;
    margin-top: 5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
    color: #000;
}

.header-body p {
    max-width: 30em;
    text-align: justify;
}

.menu-btn {
    display: none;
}
.btn-car {
    padding: 0.7em 1.7em 0.7em 1.7em;
    border: none;
    cursor: pointer;
    background-color: #eee;
    color: #000;
    font-family: 'Montserrat';
}


.btn-car:hover {
    padding: 0.7em 1.7em 0.7em 1.7em;
    border: none;
    cursor: pointer;
    background-color: #000;
    color: #eee;
    font-family: 'Montserrat';
}
</style>