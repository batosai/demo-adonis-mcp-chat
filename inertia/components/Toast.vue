<script setup lang="ts">
import { watch } from 'vue'
import { usePage } from '@inertiajs/vue3'
import type { Data } from '@generated/data'

const toast = useToast()
const page = usePage<Data.SharedProps>()

watch(
  () => page.props.flash.error,
  (error) => {
    if (error) {
      toast.add({
        title: error,
        color: 'error',
      })
      page.props.flash.error = ''
    }
  },
  { immediate: true }
)
</script>
<template></template>
