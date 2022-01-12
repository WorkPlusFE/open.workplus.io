import { serverApi } from './serverApi';
import { devTools } from './devTools';
import { theme } from './theme';
import { lightApp } from './lightApp';
import { jsSDK } from './jsSdk';
import { more } from './more';
import { qa } from './qa';

export const navbar = [
  {
    text: '首页',
    link: '/'
  },
  lightApp,
  serverApi,
  jsSDK,
  theme,
  devTools,
  qa,
  more,
];
