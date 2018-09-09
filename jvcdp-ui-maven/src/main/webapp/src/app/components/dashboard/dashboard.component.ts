import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { JvcdpService } from 'app/services/jvcdp.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  timestamp:String;
  private timerSubscription: AnonymousSubscription;
  private homeMessageSubscription: AnonymousSubscription;

  constructor(private httpService:JvcdpService) {
    this.timerSubscription = Observable.timer(5000).subscribe(() => this.refreshData());
    this.timestamp = 'random';
  }

  ngOnInit() {
  this.refreshData();

  }

private refreshData(): void {
    this.homeMessageSubscription = this.httpService.get('/home').subscribe(data => {
        this.timestamp = data;
        this.subscribeToData();
    });
}

private subscribeToData(): void {
    this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
}


public ngOnDestroy(): void {
    if (this.homeMessageSubscription) {
        this.homeMessageSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
    }
}


}
