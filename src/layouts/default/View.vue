<template>
  <v-main>
    <v-breadcrumbs>
      {{ pageName }}
    </v-breadcrumbs>

    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const pageName = computed(() => route.name);
</script>
