import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatSidenavModule,MatListModule,MatInputModule,MatFormFieldModule,MatSelectModule],
  exports: [MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatSidenavModule,MatListModule,MatInputModule,MatFormFieldModule,MatSelectModule],
})
export class MaterialModule { }