<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
import Password from '~/components/Password.vue'
</script>

<template>
  <Form route="new_account.store" #default="{ processing, errors }">
    <div class="grid grid-cols-12 gap-4">
      <UFormField label="Full name" name="fullName" :error="errors.fullName" class="col-span-12">
        <UInput id="full-name" class="w-full" />
      </UFormField>

      <UFormField label="Email" name="email" :error="errors.email" required class="col-span-12">
        <UInput
          id="signup-email"
          type="email"
          class="w-full"
          :data-invalid="errors.email ? 'true' : undefined"
        />
      </UFormField>

      <div class="col-span-12 space-y-2">
        <Password
          id="password"
          label="New Password"
          name="password"
          autocomplete="new-password"
          :error="errors.password"
          required
        />

        <Password
          id="password-confirmation"
          label="Confirm Password"
          name="passwordConfirmation"
          autocomplete="new-password"
          :error="errors.passwordConfirmation"
          :meter="false"
        />
      </div>

      <div class="col-span-12 text-center">
        <UButton type="submit" :disabled="processing" label="Submit" block />
      </div>
    </div>
  </Form>
</template>
