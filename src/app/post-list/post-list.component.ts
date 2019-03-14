import { Post } from "./../post-list-item/post-list-item.component";
import { Component, Input } from "@angular/core";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {
  @Input("posts") posts: Post[];
}
