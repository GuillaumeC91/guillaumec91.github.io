<template>
  <div name="slopeseparator">
    <div v-if="direction=='asc'" class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute" style="height:80px;transform:translateZ(0)">
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon class="fill-current" points="2560 0 2560 100 0 100" :class="fillColor" />
      </svg>
    </div>
    <div
      v-if="direction=='desc'"
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon class="fill-current" points="2560 0 2560 100 0 100" :class="fillColor" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlopeSeparator',
  props: {
    direction: {
      type: String,
      validator (value) {
        // The value must match one of these strings
        return ['asc', 'desc'].includes(value)
      }
    },
    fillColor: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
