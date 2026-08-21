<script setup lang="ts">
import Collection from './widgets/Collection.vue';
import Feed from './widgets/Feed.vue';
import Header from './widgets/Header.vue';
import { useCollectionsStore } from './stores/colStore.ts';

const collectionsStore = useCollectionsStore()

</script>

<template>
  <Header/>
  <Feed v-if="collectionsStore.openedCollectionId===null"/>
  <Collection v-else />
</template>

<style scoped>

</style>
