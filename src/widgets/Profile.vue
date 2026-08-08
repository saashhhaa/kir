<script lang="ts" setup>
import { profile } from '../input-data/profile';
import YearsBar from './YearsBar.vue';
</script>

<template>
<div class="profile">
    <div class="profile__info">
        <div :style="{backgroundImage: `url(${profile.IMAGE})`}" class="profile__image"></div>
    <h1 class="profile__nickname">{{ profile.NICKNAME }}</h1>
    <p class="profile__description">{{ profile.DESCRIPTION }}</p>
    </div>
    <YearsBar/>
</div>
</template>

<style lang="scss">
.profile {
    width: 100%;
    background-color: var(--profile-back);
    color: var(--main-text-inverse);
    padding: 5vh 10vw;

    &__nickname{
        font-size: 2rem;
        margin: 10px 0 5px 0;
    }

    &__description {
        color: var(--secondary-light-text)
    }

    &__image {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
     aspect-ratio: 1;

        width: clamp(100px, 10vw, 400px);
    }

    &__info {
        margin-bottom: 10vh;
    }

}
</style>