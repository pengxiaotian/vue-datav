import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import { loadAsyncComponent } from '@/utils/async-component'
import China2d from './src/index.vue'

China2d.install = (app: App): void => {
  app.component('VChina2d', China2d)
  app.component('VChina2dProp', loadAsyncComponent(() => import('./src/config.vue')))
  app.component('VChina2dAreaProp', loadAsyncComponent(() => import('./src/china2d-area/config.vue')))
  app.component('VChina2dBubblesProp', loadAsyncComponent(() => import('./src/china2d-bubbles/config.vue')))
  app.component('VChina2dFlyinglineProp', loadAsyncComponent(() => import('./src/china2d-flyingline/config.vue')))
}

export default China2d as SFCWithInstall<typeof China2d>
