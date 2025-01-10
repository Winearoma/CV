<script setup lang="ts">


defineProps<{
  name: string,
  lvl: number
}>()

/*
interface SkillObj
{
  name: string,
  lvl: number
}


defineProps<{
  skill: SkillObj,
}>()
*/

</script>

<template>
  <div class="skill">
    <h1>{{ name }} </h1>
    <progress :value="lvl" max="100"/>
  </div>
</template>

<style scoped>

.skill {
  display: flex;
  flex-direction: column;
  font-size:0.9em;
  margin: 1em;
}

progress {
  height: .4em;
  margin-top: .5em;
  width: 100%;
}

aside progress {
  background-color: var(--color-background-progress-aside);
  border: .1em solid var(--color-background-aside);
}
aside progress::-webkit-progress-bar {
  background-color: yellow;
}
aside progress::-webkit-progress-value {
  background-color: antiquewhite;
}
aside progress::-moz-progress-bar {
  /* style rules */
  background-color: var(--color-progress-aside);
}

main progress {
  background-color: var(--color-background-progress-main);
  border: .1em solid var(--color-background-main);
}
main progress::-webkit-progress-bar {
  background-color: yellow;
}
main progress::-webkit-progress-value {
  background-color: var(--color-progress-main);
}
main progress::-moz-progress-bar {
  /* style rules */
  background-color: var(--color-progress-main);
}


</style>
