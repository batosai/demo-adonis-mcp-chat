<script setup lang="ts">
import { computed } from 'vue'
import type { TabsItem } from '@nuxt/ui'
import { useRouter } from '@adonisjs/inertia/vue'
import { Head } from '@inertiajs/vue3'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

type Tab = 'login' | 'signup'

const router = useRouter()

const props = defineProps<{
  tab?: Tab
}>()

const activeTab = computed<Tab>({
  get: () => props.tab ?? 'login',
  set: (tab) => {
    const route = tab === 'login' ? 'session.create' : 'new_account.create'
    router.visit({ route })
  },
})

const items: TabsItem[] = [
  { label: 'Login', value: 'login', slot: 'login' },
  { label: 'Signup', value: 'signup', slot: 'signup' },
]
</script>

<template>
  <Head :title="tab === 'signup' ? 'Signup' : 'Login'" />

  <UTabs
    v-model="activeTab"
    :items="items"
    color="neutral"
    variant="pill"
    class="w-full max-w-2xl gap-8"
    :ui="{ root: 'gap-8', content: 'min-h-[510px] w-full' }"
  >
    <template #login>
      <UPageCard class="w-full max-w-md">
        <LoginForm />
      </UPageCard>
    </template>

    <template #signup>
      <UPageCard class="w-full max-w-md">
        <RegisterForm />
      </UPageCard>
    </template>
  </UTabs>
</template>
