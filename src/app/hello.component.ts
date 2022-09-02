import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <div>Tdgsdgsdgsdg</div>
    <ng-content></ng-content>
  <button>Tetsesdg</button>

  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
