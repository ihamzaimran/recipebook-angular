import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { PlaceHolderDirective } from './shared/placeholder/placeholder.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-rotuing.module';
import {RecipeService} from './recipes/recipe.service';
import {AuthComponent} from './auth/auth.component';
import {LoadingSpinner} from './shared/loading-spinner/loading-spinner';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AlertComponent} from './shared/alert/alert.component';
import { RecipesModule } from './recipes/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinner,
    AlertComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
