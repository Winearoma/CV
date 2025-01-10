<script setup lang="ts">
defineProps<{
  a: string
  b: number
}>()
</script>
<template>
  <div class="testa">testa {{ a }}  - {{ b }}
    <!--<span :name="lang.name" :id="lang.name"> {{ lang.eqLvl }} - {{ lang.lvl }} - {{ lang.eqLvl }} </span>
    <span> {{ lang.name }} </span>
    <span> {{ lang.eqLvl }} </span>-->

    <span :id="'id' + a" :data-idea="'di-' + b" > {{ a }} - {{ b }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Testa"
}
</script>

<style scoped>

</style>
