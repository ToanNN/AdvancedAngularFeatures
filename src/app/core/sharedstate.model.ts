import { InjectionToken } from "@angular/core";

export enum MODES {
  CREATE,
  EDIT
}

export const SHARED_STATE = new InjectionToken("SHARED_STATE");
export class SharedState {
  constructor(public mode: MODES, public id?: number) { }

}
