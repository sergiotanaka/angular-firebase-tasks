import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import {
  MatToolbarModule,
  MatListModule,
  MatLineModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskDialogComponent
  ],
  entryComponents: [
    TaskDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    MatToolbarModule,
    MatLineModule,
    MatListModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [AngularFirestore, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
