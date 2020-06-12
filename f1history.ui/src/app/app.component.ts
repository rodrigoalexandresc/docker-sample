import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng9test';
  data: Observable<any>;

  constructor(appService: AppService) {
    this.data = appService.getSeason();
  }
}
