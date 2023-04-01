<template>
  <!-- <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset
    </v-app-bar-title>
  </v-app-bar> -->
  <v-app-bar :elevation="2">  <v-app-bar-title>
      <v-icon icon="mdi mdi-movie-open-play" />

      Movies Ninja
    </v-app-bar-title>
  <template v-slot:append>
    <v-btn icon="mdi-heart"></v-btn>

    <v-btn icon="mdi-magnify"></v-btn>

    <v-btn icon="mdi-dots-vertical"></v-btn>
  </template>
</v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
