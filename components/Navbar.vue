<template>
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
.menu-btn {
    display: none;
}

</style>