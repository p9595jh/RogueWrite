import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatInputModule,
  MatTableModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatMenuModule,
  MatIconModule,
  MatSelectModule,
  MatBottomSheetModule,
  MatSidenavModule,
  MatListModule,
  MatAutocompleteModule
} from '@angular/material';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModifyComponent } from './components/modify/modify.component';
import { BoardComponent } from './components/board/board.component';
import { WriteComponent } from './components/write/write.component';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'modify', component: ModifyComponent, canActivate: [AuthGuard] },
  { path: 'board/:type/:num', component: BoardComponent },
  { path: 'write/:type', component: WriteComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'test', component: TestComponent }
]

@NgModule({
  declarations: [
    FileSelectDirective,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ModifyComponent,
    BoardComponent,
    WriteComponent,
    TestComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      onSameUrlNavigation: 'reload'
    }),
    NgFlashMessagesModule,
    CommonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),

    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
