import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const coreDataRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
})
export class CoreDataModule {}
