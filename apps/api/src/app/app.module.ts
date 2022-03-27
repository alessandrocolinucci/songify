import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Module } from '@nestjs/common';
import { StoreModule } from '@ngrx/store';
import { CoreDataModule } from '@songify-workspace/core-data';
import { CoreStateModule } from '@songify-workspace/core-state';
import { MaterialModule } from '@songify-workspace/material';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
