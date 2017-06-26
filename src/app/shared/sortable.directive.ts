import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';

@Directive({
  selector: '[rzSortable]'
})
export class SortableDirective {

  @HostBinding('class.glyphicon-sort-by-attributes') sortAscStyle;
  @HostBinding('class.glyphicon-sort-by-attributes-alt') sortDescStyle;
  @Input('rzSortable') name: string;
  @Output() change = new EventEmitter < {} > ();

  private sort = false;
  private sortAsc = true;
  private field:string;

  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('sortable');
  }

  @HostListener('click') onClick() {

    if (!this.sort) {
      this.sort = true;
      //console.log('Remover sortAscStyle e sortDescStyle anteriores');
  } else {
      this.sortAsc = !this.sortAsc;
      //console.log('Continue');
    }
    this.changeStyle();
    this.emitParams();
  }
  emitParams() {
    const data = {
      orderBy: this.name,
      sortOrder: this.sortAsc ? 'asc' : 'desc'
    };
    this.change.emit(data);
  }
  changeStyle() {
    if (!this.sort) {
      this.sortAscStyle = false;
      this.sortDescStyle = false;
      return;
    }
    this.sortAscStyle = this.sortAsc;
    this.sortDescStyle = !this.sortAsc;
  }
}