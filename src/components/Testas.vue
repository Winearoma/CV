<script setup lang="ts">

import Skill from "./Skill.vue";
interface testObj {
  name: string,
  lvl: number,
  eqLvl: string
}

defineProps<{
  test: testObj
}>()

interface SkillObj {
  name: string,
  lvl: number
}
</script>

<template>
  <div class="language">
    <span> {{ test.eqLvl }} </span>
    <span> {{ test.name }} </span>
    <span> {{ test.lvl }} </span>

    <!--span :id="'id' + test.name" :data-idea="'di-' + test.name">{{ test.lvl }}  {{ test.name }} - {{ test.eqLvl }}</span-->
  <Skill :name="test.name" :lvl="test.lvl"></Skill>
  </div>
</template>

<script lang="ts">
export default {
  name: "Testas"
}

</script>

<style scoped>

</style>
