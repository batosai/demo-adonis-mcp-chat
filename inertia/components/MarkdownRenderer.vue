<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps<{
  content: string
}>()

marked.setOptions({
  gfm: true,
  breaks: true,
})

const rendered = computed(() => marked.parse(props.content) as string)
</script>

<template>
  <div
    class="prose prose-sm dark:prose-invert max-w-none *:first:mt-0 *:last:mb-0"
    v-html="rendered"
  />
</template>
