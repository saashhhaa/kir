<script setup lang="ts">
import { ref } from 'vue';
import Collection from './widgets/Collection.vue';
import Feed from './widgets/Feed.vue';
import Header from './widgets/Header.vue';
import { useCollectionsStore } from './stores/colStore.ts';

const collectionsStore = useCollectionsStore()




</script>

<template>
  <Header/>
  <Feed v-if="!collectionsStore.isCollectionOpen" @open-collection="openCollection"/>
  <Collection @close-collection="closeCollection" v-else :collection_id="collectionId" />
</template>

<style scoped>

</style>
