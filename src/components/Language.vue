<script setup lang="ts">

import Skill from "./Skill.vue";
interface langObj {
  name: string,
  lvl: number,
  eqLvl: string
}

defineProps<{
  lang: langObj
}>()

interface SkillObj {
  name: string,
  lvl: number
}

</script>

<template>
  <div class="language">
    <span> {{ lang.eqLvl }} </span>
    <Skill :name="lang.name" :lvl="lang.lvl"></Skill>
  </div>
</template>

<script lang="ts">
export default {
  name: "Language"
}
</script>

<style scoped>
div.language {
  position: relative;
  font-size:0.8em;
  text-transform: uppercase;
  margin-bottom: 1em;
  min-width: 75px;
}
span {
  position: absolute;
  right: 0;
  text-align: right;
  bottom: .3rem;
  display:none
}
.skill {
  margin: 1em 0;
}
@media (min-width: 700px) {
  span{
    display: inline;
  }
}

</style>
