export enum MODES {
  CREATE,
  EDIT
}

export class SharedState {
  mode: MODES = MODES.CREATE;
  id: number = 0;
}
