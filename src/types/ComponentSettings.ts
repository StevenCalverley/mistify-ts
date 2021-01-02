import Vue, { PropOptions } from 'vue';
import ComponentName from './ComponentName';

export type CustomProp = {
  [key: string]:
    | undefined
    | string
    | number
    | boolean
    | Array<CustomProp>
    | (() => CustomProp)
    | CustomProp;
};

export type MComponent = typeof Vue & {
  options?: {
    props?: {
      [key: string]: PropOptions;
    };
    name: ComponentName;
  };
};

type ComponentSettings = {
  component: MComponent;
  props: CustomProp;
};

export default ComponentSettings;
