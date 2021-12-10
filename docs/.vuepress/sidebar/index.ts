import { apiSideBar } from './serverApi';
import { devTools } from './devTools';
import { theme } from './theme';
import { lightApp } from './lightApp';
import { jsSDK } from './jsSdk';

export const sidebar = {
  '/light-app/': lightApp,
  '/js-sdk/': jsSDK,
  '/api/': apiSideBar,
  '/design-specification/': theme,
  '/dev-tools/': devTools,
};
