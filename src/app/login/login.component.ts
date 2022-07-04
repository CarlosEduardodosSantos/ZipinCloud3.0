import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ZipInCloudService } from "../zip-in-cloud.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private api: ZipInCloudService, private router: Router, private toast: ToastrService) {}

  string: any;
  usuario: any;

  ngOnInit(): void {}

  async logar(nome: any, senha: any) {
    await this.api.obterString().then((data) => {
      this.string = data;

      console.log(this.string);
    });

    await this.api.logar(nome, senha).then((data) => {
      this.usuario = data;

      console.log(this.usuario);
      if (this.usuario != null) {
        localStorage.setItem("nome", this.usuario.nome);
        localStorage.setItem("senha", this.usuario.senha);
        localStorage.setItem("role", this.usuario.role);
        this.router.navigate(["/home"]);
      } else {
        this.toast.error("Usuário ou Senha inválidos","O Login Falhou :(");
      }
    });
  }
}
