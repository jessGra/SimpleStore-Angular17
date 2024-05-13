import { Component, Input, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuItem],
  templateUrl: './theme-toggler.component.html',
})
export class ThemeTogglerComponent {
  themeService: ThemeService = inject(ThemeService);
  @Input() menuItem: boolean = false;

  handleToggleTheme() {
    this.themeService.toggleTheme();
  }
}
