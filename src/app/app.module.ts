import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent, CustomizeTemplate } from './app.component';
import { AppService } from './app.service'
import { AppRoutingModule } from './app-routing.module'; // ✅ import this

@NgModule({
  declarations: [AppComponent, CustomizeTemplate],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
