import Vue, { PluginFunction } from 'vue';
import LibrarySettings from './types/LibrarySettings';
import components from './components';

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

  // components
  for (const componentName in components) {
    const component = components[componentName];
    if (component && component.options) {
      vueInstance.component(component.options.name, component);
    }
  }
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Default export is library as a whole, registered via Vue.use()
export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
