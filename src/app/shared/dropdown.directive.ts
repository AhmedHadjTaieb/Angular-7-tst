import { Directive, HostListener, HostBinding, OnInit } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit {
  @HostBinding("style.border-color") borderColor: string;
  @HostBinding("class.show") toggleOpen: boolean = false;

  constructor() {}
  ngOnInit() {
    this.borderColor = "transparent";
  }

  @HostListener("mouseover") onHover() {
    this.toggleOpen = true;
  }
}
