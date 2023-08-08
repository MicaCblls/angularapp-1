import { Component, OnInit } from '@angular/core';
import { MyDataLoaderService } from './my-data-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appSvc: MyDataLoaderService) {}
  title = 'angularapp-1';
  ngOnInit(): void {
    this.appSvc.dataLoaded();
  }
}
