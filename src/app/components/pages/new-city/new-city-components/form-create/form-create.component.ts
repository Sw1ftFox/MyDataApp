import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { City } from '../../../../../cities';

@Component({
  selector: 'city-form-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.scss'
})
export class FormCreateComponent {
  @Input() cities!: City[];
  @Output() saveCities = new EventEmitter();

  name = new FormControl('');
  description = new FormControl('');
  image = new FormControl('');

  onSubmit(): void {
    const newCity: City = {
      id: this.cities.length + 1,
      name: this.name.value ?? '',
      description: this.description.value ?? '',
      image: this.image.value ?? '',
      favorite: false
    };

    this.cities.push(newCity);

    this.saveCities.emit();
  }
}
