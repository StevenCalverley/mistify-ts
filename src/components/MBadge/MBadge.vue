<template>
  <span
    class="inline-block px-2 py-1 text-sm font-bold rounded-full"
    :class="[
      { ' bg-gray-100 text-gray-800': type === '' || type === ' GRAY' },
      { ' bg-blue-100 text-blue-800': type === 'BLUE' },
      { ' bg-yellow-100 text-yellow-800': type === 'YELLOW' },
      { ' bg-green-100 text-green-800': type === 'GREEN' },
      { ' bg-red-100 text-red-800': type === 'RED' },
    ]"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'm-badge',
  props: {
    /**
     * Type of badge
     */
    type: {
      type: String,
      default: 'GRAY',
      validator(value) {
        return ['GRAY', 'BLUE', 'RED', 'GREEN', 'YELLOW'].indexOf(value) !== -1;
      },
    },
  },
});
</script>

<style></style>
