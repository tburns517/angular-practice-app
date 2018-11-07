import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StatsComponent } from './stats/stats.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { GetAndPostComponent } from './get-and-post/get-and-post.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes:Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'interpolation', 
    component: InterpolationComponent
  },
  {
    path: 'property-binding', 
    component: PropertyBindingComponent
  },
  {
    path: 'class-binding', 
    component: ClassBindingComponent
  },
  {
    path: 'style-binding', 
    component: StyleBindingComponent
  },
  {
    path: 'event-binding', 
    component: EventBindingComponent
  },
  {
    path: 'two-way-binding', 
    component: TwoWayBindingComponent
  },
  {
    path: 'get-and-post',
    component: GetAndPostComponent
  },
  {
    path: 'user-form',
    component: UserFormComponent
  },
  {
    path: 'stats', 
    component: StatsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    StatsComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    GetAndPostComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), //Added for routes (const routes above)
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
