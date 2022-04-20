import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropzone]',
})
export class DropzoneDirective {
  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();
  @HostListener('drageover', ['$event'])
  onDrop($event: any) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfar.files);
    this.hovered.emit(false);
  }
  @HostListener('dargleave', ['$event'])
  onDragLeave($event: any) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfar.files);
    this.hovered.emit(false);
  }

  constructor() {}
}
