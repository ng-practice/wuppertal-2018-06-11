import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2
} from '@angular/core';

@Directive({
  // <button appClickOnce>Some</button>
  selector: '[appClickOnce]'
})
export class ClickOnceDirective {
  // <button (appClickOnce)>Some</button>
  @Output() appClickOnce = new EventEmitter<MouseEvent>();

  constructor(private renderer: Renderer2, private element: ElementRef) {
    // nativeElement corresponds to the target element we want to enhance.
    const unsubscribe = this.renderer.listen(
      this.element.nativeElement,
      'click',
      clickArgs => this.clickOnce(clickArgs, unsubscribe)
    );
  }

  private clickOnce(clickArgs: MouseEvent, unsubscribe: () => void) {
    this.appClickOnce.emit(clickArgs);
    // 1. Disable Element
    // <button disabled></button>
    this.renderer.setAttribute(this.element.nativeElement, 'disabled', null);
    // 2. Remove Click Event Listener
    unsubscribe();
  }
}
