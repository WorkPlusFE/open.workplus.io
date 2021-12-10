import { serverApi } from './serverApi';
import { devTools } from './devTools';
import { theme } from './theme';
import { lightApp } from './lightApp';
import { jsSDK } from './jsSdk';
import { more } from './more';

export const navbar = [
  lightApp,
  serverApi,
  jsSDK,
  theme,
  devTools,
  {
    text: '常见问题',
    link: '/qa.md',
  },
  more,
];
