import Vue, { PropOptions } from 'vue';
import ComponentName from '../types/ComponentName';
import { MButton } from './MButton';

type MComponent = typeof Vue & {
  options?: {
    props?: {
      [key: string]: PropOptions;
    };
    name: ComponentName;
  };
};

type Components = {
  [key: string]: MComponent;
};

const components: Components = {
  MButton,
};
export default components;
