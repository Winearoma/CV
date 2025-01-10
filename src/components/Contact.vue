

<template>
  <div class="contact">
    <div>
      <IconLocation />
      <span>{{ location }}</span>
    </div>
    <div>
      <IconMail />
      <span>Barcelona</span>
    </div>
    <div>
      <IconPhone />
      <span>Barcelona</span>
    </div>
  </div>
</template>

<script>
import IconLocation from "@/components/icons/IconLocation.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
export default {
  name: "Contact",
  components: {IconLocation, IconMail, IconPhone}
}
</script>

<style scoped>
.contact > div {
  display: flex
}
</style>
