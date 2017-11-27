import { HostListener, Directive, Input, ElementRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true }
  ]
})

// https://angular.io/guide/form-validation#template-driven-validation
export class ForbiddenNameDirective implements Validator{

  @Input() forbiddenName: string;
  @Input() colorEnter: string;
  @Input() colorLeave: string;

  constructor(private el: ElementRef){ }

  validate(c: AbstractControl): { [key: string]: any; } {
    const reg = new RegExp(this.forbiddenName, 'i');
    const forbidden = reg.test(c.value);
    return forbidden ? {'forbiddenName': {value: c.value}} : null;
  }

  registerOnValidatorChange?(fn: () => void): void { }

  @HostListener('mouseenter') onmouseenter(): void{
    this.changeColor(this.colorEnter || 'red');
  }

  @HostListener('mouseleave') onmouseleave(): void{
    this.changeColor(this.colorLeave || 'blue');
  }

  private changeColor(color: string): void{
    this.el.nativeElement.style.color = color;
  }
}
