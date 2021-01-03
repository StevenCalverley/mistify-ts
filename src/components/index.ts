import { MComponent } from '../types/ComponentSettings';
import MBadge from './MBadge/MBadge.vue';
import { MButton } from './MButton';

type Components = {
  [key: string]: MComponent;
};

const components: Components = {
  MBadge,
  MButton,
};
export default components;
