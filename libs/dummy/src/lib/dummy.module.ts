import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DummyComponent],
  exports: [DummyComponent],
})
export class DummyModule {}
