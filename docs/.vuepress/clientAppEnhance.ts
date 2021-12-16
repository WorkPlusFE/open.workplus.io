import { defineClientAppEnhance } from '@vuepress/client';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPlus);
})