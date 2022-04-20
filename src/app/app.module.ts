import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { RegisterNameComponent } from './auth/register-name/register-name.component';
import { RegisterCityComponent } from './auth/register-city/register-city.component';
import { RegisterEmployeeComponent } from './auth/register-employee/register-employee.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { GroupsComponent } from './core/groups/groups.component';
import { EventsComponent } from './core/events/events.component';
import { ProfileComponent } from './core/profile/profile.component';
import { NotificationComponent } from './core/notification/notification.component';
import { HeaderComponent } from './layout/header/header.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { NetworkComponent } from './network/network.component';
import { ConnectCardComponent } from './connect-card/connect-card.component';
import { ConnectionComponent } from './connection/connection.component';
import { DetailsComponent } from './core/details/details.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalizationService } from './_services/localization.service';
import { SearchComponent } from './layout/search/search.component';
import { MyjopsComponent } from './MyjopsPage/myjops/myjops.component';
import { JopsComponent } from './MainPageJpos/jops/jops.component';
import { InterViewPropComponent } from './InterViewPage/inter-view-prop/inter-view-prop.component';
import { SettingComponent } from './AppSettings/setting/setting.component';
import { QustionsComponent } from './InterViewPage/qustions/qustions.component';
import { SimperAncwerComponent } from './InterViewPage/simper-ancwer/simper-ancwer.component';
import { MiddelCardComponent } from './MainPageJpos/middel-card/middel-card.component';
import { MidelCardComponent } from './MyjopsPage/midel-card/midel-card.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { DropzoneDirective } from './dropzone.directive';
import { SkillsComponent } from './skills/skills.component';
import { ModellsettingComponent } from './AppSettings/modellsetting/modellsetting.component';
import { JopDetailsComponent } from './Detials/jop-details/jop-details.component';
import { MainParentDetailsComponent } from './Detials/main-parent-details/main-parent-details.component';
import { FilesComponent } from './files/files.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FileComponent } from './files/file/file.component';
import { FileListComponent } from './files/file-list/file-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalaryComponent } from './salary/salary.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export function httpLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'assets/i18n/','.json')
}




@NgModule({
  declarations: [
    MidelCardComponent,
    MiddelCardComponent,
    SimperAncwerComponent,
    QustionsComponent,
    AppComponent,
    JopsComponent,
    SettingComponent,
    InterViewPropComponent,
    MyjopsComponent,
    RegisterComponent,
    RegisterNameComponent,
    RegisterCityComponent,
    RegisterEmployeeComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    GroupsComponent,
    EventsComponent,
    ProfileComponent,
    NotificationComponent,
    HeaderComponent,
     NetworkComponent, ConnectCardComponent, ConnectionComponent, DetailsComponent, MessagesComponent, SearchComponent,    NetworkComponent,
     ConnectCardComponent,
     ConnectionComponent,
     DropzoneDirective,
     SkillsComponent,
     ModellsettingComponent,
     JopDetailsComponent,
     MainParentDetailsComponent,
     FilesComponent,
     FileComponent,
     FileListComponent,
     SalaryComponent,
  ],
  imports: [
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AngularFileUploaderModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // NgbModal,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: httpLoader,
        deps:[HttpClient]
      },isolate:true
    }),

  ],


  providers: [TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate: TranslateService,private localizationService:LocalizationService) {
    this.translate.use(localizationService.getLanguage());
  }

}




