<script setup lang="ts">
import Contact from "@/components/Contact.vue";

defineProps<{
  firstName: string,
  lastName: string,
  job: string
}>()
</script>

<template>
  <div class="header">
    <div class="left">
      <h3>
        <span>{{ firstName }}</span>
        <span>{{ lastName }}</span>
      </h3>
      <h1>{{ job }}</h1>
    </div>
    <div class="right">
      <Contact />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Header.vue"
}
</script>

<style scoped>
  .header {
    display: inline-flex;
    color: var(--color-text);
    background-color: var(--color-background-main);
    font-family: Bebas;
    font-size: 1.6rem
  }
  span {
    display: block;
  }
  h1{
    font-size:.7em;
    color: var(--color-text-annotation);
  }
  h3{
    font-size: 1.8em;
  }
</style>
