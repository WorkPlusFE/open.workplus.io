import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("ColorCard", defineAsyncComponent(() => import("/Users/Holowaychuk/foreverht/hejx/workplus-fe/open.workplus.io/docs/.vuepress/components/ColorCard.vue"))),
  app.component("ColorCardGroup", defineAsyncComponent(() => import("/Users/Holowaychuk/foreverht/hejx/workplus-fe/open.workplus.io/docs/.vuepress/components/ColorCardGroup.vue")))
}
