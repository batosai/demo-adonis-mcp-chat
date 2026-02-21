<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

import { Link } from '@adonisjs/inertia/vue'
import { useChat } from '~/composables/use_chat'
import MarkdownRenderer from '~/components/MarkdownRenderer.vue'

const { messages, status, error, input, sendMessage, stop, regenerate } = useChat()
</script>

<template>
  <Head title="Homepage" />

  <UCard :ui="{ root: 'h-[530px] flex flex-col', body: 'flex-1 min-h-0 overflow-y-auto' }">
    <UChatMessages
      :messages="messages"
      :status="status"
      should-auto-scroll
      :user="{ side: 'right', variant: 'soft' }"
      :assistant="{ side: 'left', variant: 'outline' }"
      :ui="{ root: '[&>article]:last-of-type:min-h-0' }"
    >
      <template #content="{ message }">
        <template
          v-for="(part, index) in message.parts"
          :key="`${message.id}-${part.type}-${index}`"
        >
          <MarkdownRenderer v-if="part.type === 'text'" :content="part.text" />
        </template>
      </template>
    </UChatMessages>

    <template #footer>
      <UChatPrompt v-model="input" :error="error" @submit="sendMessage">
        <UChatPromptSubmit :status="status" @stop="stop()" @reload="regenerate()" />
      </UChatPrompt>
    </template>
  </UCard>
  <Link route="session.destroy">Logout</Link>
</template>
