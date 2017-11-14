import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { _ } from './i18n-marker';

@Component({
  selector: 'phonecat-app',
  templateUrl: './phonecat-app.component.html'
})
export class PhonecatAppComponent {
  title: string;

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('fr');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('fr');
    translate.get(_('Hello There')).subscribe((val) => this.title = val);
  }
}
