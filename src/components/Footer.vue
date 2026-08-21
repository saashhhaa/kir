<script setup lang="ts">
import { profile } from '../data/profile';

</script>

<template>
    <footer class="footer">
        {{ profile.FOOTER }}
    </footer>
</template>

<style scoped lang="scss"> 
    .footer {
        width: 100%;
        padding: 30px 5vw;
        background-color: var(--profile-back);
        color: var(--secondary-text);
        font-size: .8rem;

    }
</style>