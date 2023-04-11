<template>
    <section class="about">

        <div class="heading">
            <h2>Green CAR,<br/>100 éléctrique</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum distinctio quod accusamus dolorem vero quaerat sequi beatae provident ex commodi maiores accusantium eius mollitia, omnis nam nisi asperiores, quis blanditiis?</p>
        </div>
        
        <div class="img-container">
            <nuxt-img format="avif" lazy="loading" class="img-container" src="/header.jpg"></nuxt-img>
        </div>

    </section>
</template>


<style scoped>
    .about h2{
        font-size: 2em;
        padding-left: 1.2em;
        border-left: 0.1em #0074e8 solid;
    }

    .heading p {
        margin-left: 3em;
        
    }

    .about{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2em;
    }

    .img-container{
        flex: 1 1 35rem;
    }

    .img-container img{
       width: 100%;
    }

    .heading{
        flex: 1 1 35rem;
        padding-left: 2em;
    }
</style>