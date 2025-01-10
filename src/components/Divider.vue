<template>

  <div class="divider">
    <div class="dot"></div>
    <div class="line"></div>
  </div>

</template>

<script>
export default {
  name: "Divider"
}
</script>

<style scoped>
  /*
  .divider {
    flex: none;
    position: absolute;
    top: .5rem;
  }
  */
  .divider {
    position: absolute;
    left: 14em;
    top: .25em;
    height:100%;
  }
  /*
  .dot{
    border: solid .3rem var(--color-text)
  }
  */
  .dot{
    height: .5rem;
    width: .5rem;
    background-color: var(--color-text);
    border-radius: .5rem
  }
  .line {
    background-color: var(--color-text);
    width: .1rem;
    height: 115%;
    margin-left: .2rem;
  }

</style>
