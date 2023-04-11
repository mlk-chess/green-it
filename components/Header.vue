<template>
    <header>
        <nav>
            <router-link to="/">Green CAR</router-link>
            <ul class="menu">
                <li><router-link to="/">Green CAR</router-link></li>
                <li>
                    <router-link to="/product">Product</router-link>
                </li>
                <li><router-link to="/">Contact</router-link></li>
            </ul>

            <div class="menu-btn">
                <img src="@/assets/img/burger.svg" alt="Icône burger pour barre de navigation">
            </div>
        </nav>

        <div class="header-body">
            <div>
                <h1 class="text-3xl">Test</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, perferendis est, dolore odio autem
                    praesentium ipsum, quia commodi unde dolor laborum voluptate dignissimos aut quas amet eos aliquid.
                    Iure, ad. </p>
                <div>
                    <button class="btn-car">Découvrez le modèle Green X</button>
                </div>
            </div>
        </div>
    </header>
</template>


<style scoped>
a {
    text-decoration: none;
    color: #fff;
}


nav,
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav {
    padding: 1em 5em;
    position: relative;
    border-bottom: 1px solid #eee;
}

nav li {
    display: inline-block;
    margin: 0 1.7em;
    text-align: center;
}

nav a:hover {
    color: #eee;

}

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
    padding: 0.7em 3em 0.7em 3em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #eee;
    font-family: 'Montserrat';
    margin-top: 1em;
    color: black
}
</style>