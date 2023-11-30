import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  private colors: string[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.color') color: string = 'black';

  @HostBinding('style.borderColor') borderColor: string = 'black';

  @HostListener('keyup') onKeyUp() {
    this.changeColor();
  }

  @HostListener('focus') onFocus() {
    this.removeFocusStyles();
  }

  private changeColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[randomIndex];
    this.borderColor = this.colors[randomIndex];
  }

  private removeFocusStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'outline', 'none');
  }
}
