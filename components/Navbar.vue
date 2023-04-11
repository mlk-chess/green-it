<template>
    <nav>
        <router-link to="/">Green CAR</router-link>
        <ul class="menu">
            <li><router-link to="/">Green CAR</router-link></li>
            <li>
                <router-link to="/product">Product</router-link>
            </li>
            <li><router-link to="/">Contact</router-link></li>
            <li>
                <form>
                    <select id="locale-select" v-model="$i18n.locale"
                        class="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="en" class="flex items-center">
                            <img src="@/assets/img/en.jpeg" alt="English flag" class="w-6 h-6 mr-2">
                            English
                        </option>
                        <option value="fr" class="flex items-center">
                            <img src="@/assets/img/fr.png" alt="French flag" class="w-6 h-6 mr-2">
                            Français
                        </option>
                    </select>
                </form>
            </li>
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