/// <reference types="@nuxt/ui" />

declare global {
  function useToast(): ReturnType<typeof import('@nuxt/ui').useToast>
  function defineShortcuts(
    ...args: Parameters<
      typeof import('@nuxt/ui/dist/runtime/composables/defineShortcuts').defineShortcuts
    >
  ): ReturnType<typeof import('@nuxt/ui/dist/runtime/composables/defineShortcuts').defineShortcuts>
  function route(name: string, params?: Record<string, any>): string
}

export {}
