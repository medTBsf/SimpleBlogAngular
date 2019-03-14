import { Component, Input } from "@angular/core";

@Component({
  selector: "post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.css"]
})
export class PostListItemComponent {
  @Input() post: Post;

  loveIt() {
    this.post.loveIts++;
  }

  dontLoveIt() {
    this.post.loveIts--;
  }
}

export interface Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}
