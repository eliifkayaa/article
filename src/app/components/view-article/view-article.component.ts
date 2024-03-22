import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.css'
})
export class ViewArticleComponent implements OnInit {
  articlesData: Array<any> = []
  articleIndex: any
  username: string = "";
  comment: string = "";

  constructor(public articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //tuttuğu datanın indexini tutar.
    this.articleIndex = this.route.snapshot.paramMap.get('articleindex')

    this.articleService.getArticle().subscribe((res) => {
      this.articlesData = res
    })
  }

  addComment() {
    let obj = {
      username: this.username,
      comment: this.comment  
    }

    this.articlesData[this.articleIndex].comments.push(obj)

    this.articleService.updateArticle(this.articlesData[this.articleIndex]).subscribe((res)=> {
      this.username = "";
      this.comment = "";
    })
  }

}
