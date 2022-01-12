import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("ColorCard", defineAsyncComponent(() => import("/Users/Holowaychuk/foreverht/hejx/workplus-fe/open.workplus.io/docs/.vuepress/components/ColorCard.vue"))),
  app.component("ColorCardGroup", defineAsyncComponent(() => import("/Users/Holowaychuk/foreverht/hejx/workplus-fe/open.workplus.io/docs/.vuepress/components/ColorCardGroup.vue"))),
  app.component("FeaturesSection", defineAsyncComponent(() => import("/Users/Holowaychuk/foreverht/hejx/workplus-fe/open.workplus.io/docs/.vuepress/components/FeaturesSection.vue"))),
  app.component("Qrcode", defineAsyncComponent(() => import("/Users/Holowaychuk/foreverht/hejx/workplus-fe/open.workplus.io/docs/.vuepress/components/Qrcode.vue"))),
  app.component("darkTheme", defineAsyncComponent(() => import("/Users/Holowaychuk/foreverht/hejx/workplus-fe/open.workplus.io/docs/.vuepress/components/darkTheme.vue")))
}
