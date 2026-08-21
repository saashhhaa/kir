<script setup lang="ts">
import Collection from './widgets/Collection.vue';
import Feed from './widgets/Feed.vue';
import Header from './widgets/Header.vue';
import { useCollectionsStore } from './stores/colStore.ts';
import Footer from './components/Footer.vue';

const collectionsStore = useCollectionsStore()

</script>

<template>
  <Header/>
  <Feed v-if="collectionsStore.openedCollectionId===null"/>
  <Collection v-else />
  <Footer/>
</template>

<style scoped>

</style>
