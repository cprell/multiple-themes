import {Injectable} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(
    public sanitizer: DomSanitizer
  ) {}

  loadCss(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('themed.css');
  }
}
