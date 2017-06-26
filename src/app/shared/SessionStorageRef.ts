import { Injectable } from '@angular/core';

function _sessionStorage(): any {
  return sessionStorage;
}

@Injectable()
export class SessionStorageRef {
  nativeWindow(): any {
    return _sessionStorage();
  }
}
