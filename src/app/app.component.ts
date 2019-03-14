import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  blogPosts = [
    {
      title: "Mon premier post",
      content:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500",
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
