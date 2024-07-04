import { Component } from '@angular/core';
import { FormCreateComponent } from "./new-city-components/form-create/form-create.component";
import { ReturnButtonComponent } from "./new-city-components/return-button/return-button.component";

@Component({
    selector: 'app-new-city',
    standalone: true,
    templateUrl: './new-city.component.html',
    styleUrl: './new-city.component.scss',
    imports: [FormCreateComponent, ReturnButtonComponent]
})
export class NewCityComponent {
};