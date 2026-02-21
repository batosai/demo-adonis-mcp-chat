<script setup lang="ts">
import { ref } from 'vue'
import { Form } from '@adonisjs/inertia/vue'

const showPassword = ref(false)
const password = ref('')
</script>

<template>
  <Form route="session.store" #default="{ processing, errors }">
    <div class="grid grid-cols-12 gap-4">
      <UFormField
        label="Email"
        for="login-email"
        name="email"
        :error="errors.email"
        class="col-span-12"
        required
      >
        <UInput
          id="login-email"
          type="email"
          placeholder="admin@adonisjs.com"
          autocomplete="username"
          class="w-full"
          :data-invalid="errors.email ? 'true' : undefined"
        />
      </UFormField>

      <UFormField
        label="Password"
        for="login-password"
        name="password"
        :error="errors.password"
        class="col-span-12"
        required
      >
        <UInput
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          id="login-password"
          autocomplete="current-password"
          class="w-full"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              type="button"
              @click="showPassword = !showPassword"
            />
          </template>
        </UInput>
      </UFormField>

      <div class="col-span-12 text-center">
        <UButton type="submit" :disabled="processing" label="Submit" block />
      </div>
    </div>
  </Form>
</template>
