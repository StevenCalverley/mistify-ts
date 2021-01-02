import Vue, { PluginFunction } from 'vue';
import LibrarySettings from './types/LibrarySettings';
import MButton from './components/MButton';

export interface InstallFunction extends PluginFunction<LibrarySettings> {
  installed?: boolean;
}

// install function executed by Vue.use()
// eslint-disable-next-line max-len
const install: InstallFunction = function installMistify(
  vueInstance: typeof Vue,
) {
  if (install.installed) return;

  install.installed = true;

  vueInstance.component('m-button', MButton);
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Default export is library as a whole, registered via Vue.use()
export default plugin;
