import { Injectable } from '@angular/core';

function _localStorage(): any {
  return localStorage;
}

@Injectable()
export class LocalStorageRef {
  nativeWindow(): any {
    return _localStorage();
  }
}