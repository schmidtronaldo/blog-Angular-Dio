import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss', './content.responsive.component.scss']
})
export class ContentComponent implements OnInit {

  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  
  private id: string | null = '0';

  constructor(
    private router: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => {
      this.id = value.get('id');
      this.setValuesToComponent(this.id);
    })
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    if(result) {
      this.photoCover = result.photo;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }

}
