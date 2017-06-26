import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ToastyConfig,
  ToastData,
  ToastyModule,
  ToastOptions,
  ToastyService
} from 'ng2-toasty';

import * as _ from 'lodash';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot()
  ],
  exports:[ToastyModule],
  declarations: []
})
export class NotifyModule {

  private toastOptions:ToastOptions = {
    title: "",
    msg: ""
  };

  constructor (
    private service: ToastyService,
    private config: ToastyConfig
  ) {
    this.config.timeout = 6000;
    this.config.position = 'top-right';
    this.config.theme = 'bootstrap';
  }

  default(msg: string, title?:string) {
    this.service.default({msg, title});
  }
  error(msg: string, title?:string) {
    this.service.error({msg, title});
  }
  info(msg: string, title?:string) {
    this.service.info({msg, title});
  }
  success(msg: string, title?:string) {
    this.service.success({msg, title});
  }
  wait(msg: string, title?:string) {
    this.service.wait({msg, title});
  }
  warning(msg: string, title?:string) {
    this.service.warning({msg, title});
  }
  clear(id:number) {
    this.service.clear(id);
  }
  clearAll() {
    this.service.clearAll();
  }
}
