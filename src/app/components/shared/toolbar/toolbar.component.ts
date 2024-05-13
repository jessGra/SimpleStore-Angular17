import { Component, Input, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeTogglerComponent } from '../theme-toggler/theme-toggler.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ThemeTogglerComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input() appName: string = '';
  public readonly authService: AuthService = inject(AuthService);

  handleLogin() {
    this.authService.login();
  }

  handleLogout() {
    this.authService.logout();
  }
}
