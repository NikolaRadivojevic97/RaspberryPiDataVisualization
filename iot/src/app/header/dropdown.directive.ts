import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    //postavlja properti na element
    @HostBinding('class.open') isOpen=false;
    //ceka click i na taj dogadjar rafi funkciju
    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
    }

}
