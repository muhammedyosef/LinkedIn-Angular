import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterCityComponent } from './auth/register-city/register-city.component';
import { RegisterEmployeeComponent } from './auth/register-employee/register-employee.component';
import { RegisterNameComponent } from './auth/register-name/register-name.component';
import { RegisterComponent } from './auth/register/register.component';
import { EventsComponent } from './core/events/events.component';
import { GroupsComponent } from './core/groups/groups.component';
import { HomeComponent } from './core/home/home.component';
import { NotificationComponent } from './core/notification/notification.component';
import { ProfileComponent } from './core/profile/profile.component';
import { AuthguardService } from './_services/authguard.service';
import { ConnectionComponent } from './connection/connection.component';
import { NetworkComponent } from './network/network.component';
import { DetailsComponent } from './core/details/details.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchComponent } from './layout/search/search.component';
import { MyjopsComponent } from './MyjopsPage/myjops/myjops.component';
import { JopsComponent } from './MainPageJpos/jops/jops.component';
import { InterViewPropComponent } from './InterViewPage/inter-view-prop/inter-view-prop.component';
import { SettingComponent } from './AppSettings/setting/setting.component';
import { FilesComponent } from './files/files.component';
import { FileComponent } from './files/file/file.component';
import { FileListComponent } from './files/file-list/file-list.component';
import { SalaryComponent } from './salary/salary.component';
import { JopDetailsComponent } from './Detials/jop-details/jop-details.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},


  // const routes: Routes = [
    {path:"register",component:RegisterComponent},
    {path:"register/name",component:RegisterNameComponent},
    {path:"register/city",component:RegisterCityComponent},
{path:"register/employe",component:RegisterEmployeeComponent},
{path:"login",component:LoginComponent},
{path:"home",component:HomeComponent,canActivate:[AuthguardService]},
{path:"profile",component:ProfileComponent,canActivate:[AuthguardService]},
{path:"groups",component:GroupsComponent},
{path:"notification",component:NotificationComponent},
{path:"events",component:EventsComponent},
{ path: 'Network', component: NetworkComponent },
{ path: 'connetion', component: ConnectionComponent},
{ path: 'detalis/:id', component: DetailsComponent},
{path:"messages",component:MessagesComponent},
{path:"search/:query",component:SearchComponent},

// { path: '', redirectTo: 'Home', pathMatch: 'full' },
{ path: 'image', component: FileComponent },
{ path: 'upload', component: FilesComponent },
{ path: 'list', component: FileListComponent },
{ path: 'Myjobs', component: MyjopsComponent },
{ path: 'jobs', component: JopsComponent },
{ path: 'detail', component: JopDetailsComponent },
{ path: 'Ainterview', component: InterViewPropComponent },
{ path: 'AppSet', component: SettingComponent },
{ path: 'salary', component: SalaryComponent },
// import { MyjopsComponent } from './MyjopsPage/myjops/myjops.component';
// import { JopsComponent } from './MainPageJpos/jops/jops.component';
// import { InterViewPropComponent } from './InterViewPage/inter-view-prop/inter-view-prop.component';
// import { SettingComponent } from './AppSettings/setting/setting.component';
// import { FilesComponent } from './files/files.component';
// import { FileComponent } from './files/file/file.component';
// import { FileListComponent } from './files/file-list/file-list.component';
// import { SalaryComponent } from './salary/salary.component';
// import { JopDetailsComponent } from './Detials/jop-details/jop-details.component';
// const routes: Routes = [
//   { path: '', redirectTo: 'Home', pathMatch: 'full' },
//   { path: 'image', component: FileComponent },
//   { path: 'upload', component: FilesComponent },
//   { path: 'list', component: FileListComponent },
//   { path: 'Myjobs', component: MyjopsComponent },
//   { path: 'jobs', component: JopsComponent },
//   { path: 'detail', component: JopDetailsComponent },
//   { path: 'Ainterview', component: InterViewPropComponent },
//   { path: 'AppSet', component: SettingComponent },
//   { path: 'salary', component: SalaryComponent },

//   { path: 'register', component: RegisterComponent },
//   { path: 'register/name', component: RegisterNameComponent },
//   { path: 'register/city', component: RegisterCityComponent },
//   { path: 'register/employe', component: RegisterEmployeeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'home', component: HomeComponent, canActivate: [AuthguardService] },
//   {
//     path: 'profile',
//     component: ProfileComponent,
//     canActivate: [AuthguardService],
//   },
//   { path: 'groups', component: GroupsComponent },
//   { path: 'notification', component: NotificationComponent },
//   { path: 'events', component: EventsComponent },
//   { path: 'Network', component: NetworkComponent },
//   { path: 'connetion', component: ConnectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
