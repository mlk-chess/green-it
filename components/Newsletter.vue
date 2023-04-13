<template>
    <section>
        <div class="header-body">
            <div>
                <p>Ne manquez plus rien et abonnez-vous à notre Newsletter afin de rester avertis de toutes nos offres promotionnelles. </p>
                <div class="mt-5 btn-block">
                    <button class="btn-car">{{ $t("i2") }}</button>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
section {
    min-height: 25em;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.header-body {
    padding: 2.5em;
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

.btn-block {
    display: flex;
    justify-content: center;
}
</style>