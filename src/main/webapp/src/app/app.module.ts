import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageSidebarComponent } from './components/page-sidebar/page-sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MapIteratorPipe } from './utility/map-iterator.pipe';

import { JvcdpService } from './services/jvcdp.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { UserManagerModule } from './modules/usermanager/usermanager.module';
import { BucketManagerModule } from './modules/bucketmanager/bucketmanager.module';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageSidebarComponent,
    DashboardComponent,
    MapIteratorPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    BucketManagerModule,
    UserManagerModule
  ],
  providers: [JvcdpService,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
