import '@adonisjs/inertia/types'

import type { VNodeProps, AllowedComponentProps, ComponentInstance } from 'vue'

type ExtractProps<T> = Omit<
  ComponentInstance<T>['$props'],
  keyof VNodeProps | keyof AllowedComponentProps
>

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'auth/components/LoginForm': ExtractProps<(typeof import('../../inertia/pages/auth/components/LoginForm.vue'))['default']>
    'auth/components/RegisterForm': ExtractProps<(typeof import('../../inertia/pages/auth/components/RegisterForm.vue'))['default']>
    'auth/index': ExtractProps<(typeof import('../../inertia/pages/auth/index.vue'))['default']>
    'errors/not_found': ExtractProps<(typeof import('../../inertia/pages/errors/not_found.vue'))['default']>
    'errors/server_error': ExtractProps<(typeof import('../../inertia/pages/errors/server_error.vue'))['default']>
    'home': ExtractProps<(typeof import('../../inertia/pages/home.vue'))['default']>
  }
}
