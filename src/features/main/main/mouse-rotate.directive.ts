import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseRotate]'
})
export class MouseRotateDirective {

  element: ElementRef;

  constructor(el: ElementRef, private renderer: Renderer2) {
    this.element = el;
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    let target = event.target as Element;
    let centerX = target.clientWidth / 2
    let centerY = target.clientHeight / 2

    let rotationFactorY = (event.offsetY - centerY) / centerY
    let rotationFactorX = (event.offsetX - centerX) / centerX

    let magnitude = Math.sqrt(rotationFactorX**2 + rotationFactorY**2)
    this.element.nativeElement.style.transform = 'rotateY('+20 * rotationFactorX +'deg) rotateX('+20 * rotationFactorY +'deg)'//rotate3d('+rotationFactorX+', '+rotationFactorY+', 1, '+20 * magnitude+'deg);'
    //this.renderer.setStyle(this.element.nativeElement, 'transform', 'rotate3d(1, 1, 1, 10deg);')
  }

}
