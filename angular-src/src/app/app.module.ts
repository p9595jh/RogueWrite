import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {  // angular-material modules
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
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTreeModule,
  MatExpansionModule
} from '@angular/material';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FileSelectDirective } from 'ng2-file-upload';
import { AuthGuard } from './guards/auth.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { SafeHtml } from '../pipes/safeHtml';
import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModifyComponent } from './components/modify/modify.component';
import { BoardComponent } from './components/board/board.component';
import { WriteComponent } from './components/write/write.component';
import { TestComponent } from './components/test/test.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { ToolComponent } from './components/tool/tool.component';
import { GameComponent } from './components/game/game.component';
import { SubComponent } from './components/sub/sub.component';
import { TempComponent } from './components/temp/temp.component';
import { CorveeComponent } from './components/corvee/corvee.component';
import { CwriteComponent } from './components/cwrite/cwrite.component';
import { PlayComponent } from './components/play/play.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'modify', component: ModifyComponent, canActivate: [AuthGuard] },
  { path: 'board/:type/:num', component: BoardComponent },
  { path: 'write/:type', component: WriteComponent, canActivate: [AuthGuard] },
  { path: 'test', component: TestComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'game/:num', component: GameComponent },
  { path: 'tool', component: ToolComponent, canActivate: [AuthGuard/*, DeactivateGuard*/] },
  { path: 'sub', component: SubComponent },
  { path: 'temp/:num', component: TempComponent, canActivate: [AuthGuard] },
  { path: 'corvee/:num', component: CorveeComponent },
  { path: 'cwrite', component: CwriteComponent, canActivate: [AuthGuard] },
  { path: 'play/:num', component: PlayComponent },
  { path: 'no-page', component: NoPageComponent },
  { path: '**', component: NoPageComponent }
];

@NgModule({
  declarations: [
    SafeHtml,
    FileSelectDirective,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ModifyComponent,
    BoardComponent,
    WriteComponent,
    TestComponent,
    NoPageComponent,
    AdminComponent,
    ToolComponent,
    GameComponent,
    SubComponent,
    TempComponent,
    CorveeComponent,
    CwriteComponent,
    PlayComponent
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
    NgxEditorModule,
    TooltipModule.forRoot(),

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
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTreeModule,
    MatExpansionModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    DeactivateGuard,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
