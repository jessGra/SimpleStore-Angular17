import { Inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeStorageKey: string = 'theme';
  theme = 'dark';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorageService: LocalStorageService
  ) {
    const lastTheme = localStorageService.getData(this.themeStorageKey);
    if (lastTheme) this.theme = lastTheme;

    this.document.body.classList.add(this.theme);
  }

  toggleTheme() {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: string) {
    this.document.body.classList.replace(this.theme, theme);
    this.theme = theme;
    this.localStorageService.saveData(this.themeStorageKey, theme);
  }
}
