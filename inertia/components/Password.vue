<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  id?: string
  label?: string
  name?: string
  required?: boolean
  error?: string
  autocomplete?: string
  meter?: boolean
  meterLabel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  id: 'password',
  label: 'Password',
  name: 'password',
  required: false,
  error: undefined,
  autocomplete: 'new-password',
  meter: true,
  meterLabel: false,
})

const password = defineModel<string>({ default: '' })
const showPassword = ref(false)

const passwordRequirements = computed(() => [
  { regex: /.{8,}/, text: 'At least 8 characters' },
  { regex: /\d/, text: 'At least 1 number' },
  { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
  { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
  {
    regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
    text: 'At least 1 special character',
  },
])

const passwordStrength = computed(() =>
  passwordRequirements.value.map((rule) => ({
    met: rule.regex.test(password.value),
    text: rule.text,
  }))
)

const passwordScore = computed(() => passwordStrength.value.filter((r) => r.met).length)

const passwordColor = computed(() => {
  if (passwordScore.value === 0) return 'neutral'
  if (passwordScore.value <= 1) return 'error'
  if (passwordScore.value <= 4) return 'warning'
  return 'success'
})

const passwordStrengthText = computed(() => {
  if (passwordScore.value === 0) return 'Enter a password'
  if (passwordScore.value <= 2) return 'Weak password'
  if (passwordScore.value <= 4) return 'Medium password'
  return 'Strong password'
})
</script>

<template>
  <UFormField :label="label" :name="name" :error="error" :required="required">
    <UInput
      v-model="password"
      :type="showPassword ? 'text' : 'password'"
      :id="id"
      :autocomplete="autocomplete"
      :color="password.length ? passwordColor : 'neutral'"
      :aria-invalid="passwordScore < 5"
      aria-describedby="password-strength"
      class="w-full"
    >
      <template #trailing>
        <UButton
          color="neutral"
          variant="link"
          size="sm"
          :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
          :aria-label="showPassword ? 'Show password' : 'Hide password'"
          :aria-pressed="showPassword"
          :aria-controls="id"
          type="button"
          @click="showPassword = !showPassword"
        />
      </template>
    </UInput>
  </UFormField>

  <template v-if="password.length && meter">
    <UProgress
      :color="passwordColor"
      :indicator="passwordStrengthText"
      :model-value="passwordScore"
      :max="5"
      size="sm"
    />
    <template v-if="meterLabel">
      <p :id="`${id}-strength`" class="text-sm font-medium">
        {{ passwordStrengthText }}. {{ 'Must contain' }}:
      </p>

      <p v-if="passwordScore === 5" class="text-xs text-success font-medium">✓ Must contain</p>

      <ul class="space-y-1" aria-label="Password requirements">
        <li
          v-for="(req, index) in passwordStrength"
          :key="index"
          class="flex items-center gap-0.5"
          :class="req.met ? 'text-success' : 'text-muted'"
        >
          <UIcon
            :name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'"
            class="size-4 shrink-0"
          />
          <span class="text-xs font-light">
            {{ req.text }}
            <span class="sr-only">
              {{ req.met ? ` - Requirement met` : ` - Requirement not met` }}
            </span>
          </span>
        </li>
      </ul>
    </template>
  </template>
</template>
