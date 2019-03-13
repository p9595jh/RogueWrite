import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { FuncService } from '../../services/func.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  type: String;
  num: String;
  content: any;
  contents: Object[];

  cmtWrite: String;

  constructor(
    private route: ActivatedRoute,
    private funcService: FuncService,
    private authService: AuthService,
    private http: Http
  ) {
    this.type = this.route.snapshot.paramMap.get('type');
    this.num = this.route.snapshot.paramMap.get('num');
  }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(this.funcService.ServerAddress + '/boards/takeAllPosts?type='+this.type, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe((data: HavingPosts) => {
      this.content = data.posts;
      if ( this.num ) {
        this.http.get(this.funcService.ServerAddress + '/boards/takeOnePost?type='+this.type+'&num='+this.num, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe((result: HavingPost) => {
          this.contents = result.post;
        });
      }
    });
  }

  onWriteComment() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let formData = {
      comment: this.cmtWrite
    };
    this.http.post(this.funcService.ServerAddress + '/boards/write', formData, {headers: headers}).pipe(map((res: Response) => res.json())).subscribe((data: ResponseWriting) => {
      if ( data.success ) {
        // code to get back to the board list page, and it has to have 'num' variable to show content itself
        // this.router.navigate['./board', needed parameters];
      }
    });
  }

}

interface HavingPost {
  post: any;
}

interface HavingPosts {
  posts: Object[];
}

interface ResponseWriting {
  success: Boolean;
}
