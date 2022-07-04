import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {MatTreeModule} from "@angular/material/tree";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { UsuariosListComponent } from "./usuarios/usuarios-list/usuarios-list.component";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { UsuariosCreateComponent } from './usuarios/usuarios-create/usuarios-create.component';
import { UsuariosUpdateComponent } from './usuarios/usuarios-update/usuarios-update.component';
import { ConfirmationPopoverModule } from "angular-confirmation-popover";
import { FornecedoresListComponent } from './fornecedores/fornecedores-list/fornecedores-list.component';
import { FornecedoresCreateComponent } from './fornecedores/fornecedores-create/fornecedores-create.component';
import { FornecedoresUpdateComponent } from './fornecedores/fornecedores-update/fornecedores-update.component';
import { GrupoListComponent } from './grupo/grupo-list/grupo-list.component';
import { GrupoCreateComponent } from './grupo/grupo-create/grupo-create.component';
import { GrupoUpdateComponent } from './grupo/grupo-update/grupo-update.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './cliente/cliente-update/cliente-update.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ProdutoCreateComponent } from './produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './produto/produto-update/produto-update.component';
import {MatSortModule} from '@angular/material/sort';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    UsuariosListComponent,
    UsuariosCreateComponent,
    UsuariosUpdateComponent,
    FornecedoresListComponent,
    FornecedoresCreateComponent,
    FornecedoresUpdateComponent,
    GrupoListComponent,
    GrupoCreateComponent,
    GrupoUpdateComponent,
    ClienteListComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ProdutoListComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTreeModule,
    HttpClientModule,
    FormsModule,
    MatSortModule,
    NgxMaskModule.forRoot(maskConfig),
    ToastrModule.forRoot({timeOut:2000, closeButton:true, progressBar:true}),
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
