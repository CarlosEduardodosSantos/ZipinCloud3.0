import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}

  isAdmin: boolean;

  ngOnInit(): void {
    this.router.navigate(["home"]);
    if (localStorage.getItem("role") === "1") {
      this.isAdmin = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
