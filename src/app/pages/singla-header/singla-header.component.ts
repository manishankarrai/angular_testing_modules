import { Component } from '@angular/core';
import { ToSignalServiceService } from '../../services/to-signal-service.service';

@Component({
  selector: 'app-singla-header',
  templateUrl: './singla-header.component.html',
  styleUrl: './singla-header.component.css'
})
export class SinglaHeaderComponent {
  value: number = 0;

  constructor(private dataService: ToSignalServiceService) {}

  ngOnInit(): void {
    this.dataService.value$.subscribe(val => this.value = val);
  }

  increase(): void {
    this.dataService.update(10); // Increase by 10
  }
}
