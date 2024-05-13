import { Injectable, WritableSignal, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authStorageKey: string = 'auth';
  private authStatus: WritableSignal<boolean> = signal(false);

  constructor(private localStorageService: LocalStorageService) {
    const auth = localStorageService.getData(this.authStorageKey);
    if (auth) this.authStatus.set(Boolean(auth));
  }

  getAuth() {
    return this.authStatus();
  }

  login() {
    this.authStatus.set(true);
    this.localStorageService.saveData(this.authStorageKey, 'true');
  }

  logout() {
    this.authStatus.set(false);
    this.localStorageService.removeData(this.authStorageKey);
  }
}
