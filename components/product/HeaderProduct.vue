<template>
    <header>
        <div class="header-body">
            <div>
                <h1 class="text-5xl">Green X</h1>
                <div class="mt-5">
                    <button class="btn-car">{{ $t("discover") }}</button>
                    <button class="btn-car m-5">{{ $t("book") }}</button>
                </div>
            </div>
        </div>
    </header>
</template>


<style scoped>

header {
    height: 100vh;
    min-height: 40em;
    background-image: url("./assets/img/ok.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    position: relative;
}

header::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
}

.header-body {
    padding: 2.5em;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
    color: #eee;
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