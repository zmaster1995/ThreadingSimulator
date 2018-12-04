import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule, MatTableModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RefreshButtonComponent } from './refresh-button/refresh-button.component';
import { BlockComponent } from './block/block.component';
import { FormsModule } from '@angular/forms';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreviewDialogComponent } from './preview-dialog/preview-dialog.component';
import { PreviewComponent } from './preview/preview.component';
import { SettingsComponent } from './settings/settings.component';
import { SimulationComponent } from './simulation/simulation.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import { ContextMenuModule } from 'ngx-contextmenu';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './default/default.component';
import { ExecutionSettingsComponent } from './execution-settings/execution-settings.component';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { NgxSpinnerModule } from 'ngx-spinner';

let routes: Routes = [
  { path: "", component: AppComponent, children: [
    { path: "", component: DefaultComponent },
    { path: "settings",  component: ExecutionSettingsComponent },
    { path: "simulation",  component: SimulationComponent }
  ]}
];

let config: ExtraOptions = {
  onSameUrlNavigation: "reload"
};

@NgModule({
  entryComponents: [
    PreviewDialogComponent
  ],
  declarations: [
    AppComponent,
    RefreshButtonComponent,
    BlockComponent,
    PreviewDialogComponent,
    PreviewComponent,
    SettingsComponent,
    SimulationComponent,
    DefaultComponent,
    ExecutionSettingsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    NgxDnDModule,   
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatExpansionModule,
    NgxSmoothDnDModule,
    ContextMenuModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes, config),
    NgxLocalStorageModule.forRoot(),
    MatTableModule,
    NgxSpinnerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
