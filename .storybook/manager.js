// .storybook/manager.js

import { addons } from '@storybook/addons';
import misitify from './misitify';

addons.setConfig({
  theme: misitify,
});
