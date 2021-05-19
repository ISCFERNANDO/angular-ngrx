import { AppState } from './redux/state';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import * as employeeActions from "./redux/actions/employee.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-pcs-angular';

  constructor(private store: Store<AppState>) {
    this.store.dispatch(employeeActions.loadEmployees());
  }
}
