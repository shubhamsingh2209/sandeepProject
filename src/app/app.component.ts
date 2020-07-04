import { Component,ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, RadioButtonComponent } from "@syncfusion/ej2-angular-buttons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    @ViewChild('togglebtn')
    public togglebtn: ButtonComponent;
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }
    btnClick() {
        if (this.togglebtn.element.classList.contains('e-active')) {
            this.sidebar.hide();
        } else {
            this.sidebar.show();
        }
    }
    closeClick() {
        this.sidebar.hide();
        this.togglebtn.element.classList.remove('e-active');
    }
}
