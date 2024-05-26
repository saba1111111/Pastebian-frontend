import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() backgroundColor: string = '#007bff';
  @Input() type: string = 'submit';
  @Input() disabled: boolean = false;
}
