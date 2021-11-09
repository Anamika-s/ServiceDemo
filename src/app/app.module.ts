import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloService } from './hello-service.service';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule, FormsModule
    , HttpClientModule
  ],
  providers: [HelloService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
