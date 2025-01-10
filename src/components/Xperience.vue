<script setup lang="ts">
interface xPObj {
  "startDate": string,
  "endDate"?: string,
  "title": string,
  "tasks"?: string[],
  "location": location,
  "skillSet"?: string[]

}
interface location {
  "at": string,
  "city": string,
  "country": string
}

defineProps<{
  xp: xPObj,
}>()

let month: number = new Date().getUTCMonth() +1;
let year: number = new Date().getUTCFullYear();



</script>

<script lang="ts">
import Divider from "@/components/Divider.vue";

export default {
name: "Xperience",
components: {Divider}
}

</script>
<template>
  <div class="xp">
    <div class="left">
      <div class="place">{{ xp.location.at }}</div>
      <div class="city">{{ xp.location.city }}</div>
      <div class="dates">
        <span>{{ xp.startDate }}</span>
        -
        <span v-if="xp.endDate">{{  xp.endDate}}</span>
        <span v-else>{{month + "/" + year}}</span>
      </div>
    </div>
    <Divider/>
    <div class="right">
      <h1 class="title"> {{ xp.title }}</h1>
      <p v-for="task in xp.tasks" class="description"> &gt;&nbsp; {{ task }}</p>
      <ul v-if="xp.skillSet" class="skills">
        <li v-for="skill in xp.skillSet">- {{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
   .xp {
     display: inline-flex;
     width: 100%;
     margin-top: 1rem;
     position: relative;
     min-height: 7em;
   }
   .left {
    width: 12em;
    text-align: left;
    margin-top: .2em; /*chamuyo para alinear los títulos*/
  }
  .right {
    margin-left: 6em;
    min-width: 30em;
    margin-top: -.1em; /*chamuyo para alinear los títulos*/
  }
  .place {
    text-transform: uppercase;
    font-weight: bold;
  }
  ul.skills {
    display: flex;
    padding: .7em 1em;
    list-style: none;
    flex-flow: column wrap;
    max-height: 7em;
  }
  .dates, .city, .skills {
    color: var(--color-text-annotation);
  }
</style>
