<script setup lang="ts">
import Header from './components/Header.vue'
import data from '../data.json'
import Xperience from "./components/Xperience.vue";
import Skill from "./components/Skill.vue";
import Language from "@/components/Language.vue";
//


console.log(data.about);

data.jobs.sort((a,b) => {
  let year: string, month: string, start: string;
  start = a.startDate;
  year = start.substring(start.indexOf("/") + 1);
  month = start.substring(0,start.indexOf("/"));
  let adate: string = year + month;
  start = b.startDate;
  year = start.substring(start.indexOf("/") + 1);
  month = start.substring(0,start.indexOf("/"));
  var bdate: string = year + month;
  console.log("a: ", adate);
  console.log("b: ", bdate);
  return parseInt(adate) - parseInt(bdate);
});


</script>

<template>

  <aside>
    <div id="languages">
      <span class="sectionTitle">Languages</span>
      <Language v-for="lang in data.languages" :lang="lang" :key="lang.name"/>
    </div>
    <div id="whoami">
      <span class="sectionTitle">About me</span>
      <p v-for="item in data.about"> {{ item }}</p>
    </div>
  </aside>
  <main>
    <Header :firstName="data.firstName" :lastName="data.lastName" :job="data.job" />
    <section id="work">
      <div class="sectionTitle">Work Experience</div>
      <Xperience v-for="job in data.jobs" :xp="job" :key="job.title.replace(/\s/g, '')"/>
    </section>
    <section id="education">
      <div class="sectionTitle">Education</div>
      <Xperience v-for="ed in data.education" :xp="ed" :key="ed.title"/>
    </section>
    <section id="skills">
      <div class="sectionTitle">Skills</div>
      <ul class="skills">
        <Skill v-for="skill in data.skillSet" :name="skill.name" :lvl="skill.lvl" />
      </ul>
    </section>
  </main>

</template>

<style scoped>
aside, main {
  padding: 3rem;
}
aside {
  width: 30%;
  color: var(--color-text-aside);
  background-color: var(--color-background-aside);
}
main {
  width: 70%;
  color: var(--color-text);
  background-color: var(--color-background-main);
}

main > section {
  width: 100%;
  font-size: 12px;
  margin-top: 3rem;
}

.sectionTitle {
  text-align: left;
  border-bottom: solid .15rem var(--color-text);
  padding-bottom: .5rem;
  display: block;
  font-size: 2rem;
  font-family: Bebas;
}

ul.skills {
  display: flex;
  list-style: none;
  flex-flow: column wrap;
  padding: 2rem;
  justify-content: flex-start;
  max-height: 50em;
}

aside .sectionTitle {
  border: none
}

aside .sectionTitle {
  border: none
}
#whoami{
  margin-top: 4em;
}

</style>


<style>
/*hide last divider line.*/
#education>div:last-child div.line, #work>div:last-child div.line {
  background-color: transparent;
}
</style>
