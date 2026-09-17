<script setup lang="ts">
import PicsCollection from "./widgets/PicsCollection.vue";
import Feed from "./widgets/Feed.vue";
import Header from "./widgets/Header.vue";
import { useCollectionsStore } from "./stores/colStore.ts";
import Footer from "./components/Footer.vue";

const collectionsStore = useCollectionsStore();
</script>

<template>
  <div class="main">
    <Header />
    <Feed v-if="collectionsStore.openedCollectionId === null" />
    <PicsCollection v-else />
    <Footer />
  </div>
</template>
