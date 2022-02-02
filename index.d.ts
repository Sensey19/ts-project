import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { accessorType } from '@/services/accessors';

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType,
    $axios: NuxtAxiosInstance
  }

  interface Context {
    $axios: NuxtAxiosInstance
  }
}
