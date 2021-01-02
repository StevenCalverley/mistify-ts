import ComponentSettings, { MComponent } from './ComponentSettings';

type LibrarySettings =
  | {
      [key: string]: ComponentSettings | MComponent;
    }
  | undefined;

export default LibrarySettings;
