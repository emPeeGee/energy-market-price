import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  slides = [
    {
      logos: [
        'assets/images/gazprom.png',
        'assets/images/vodofone.png',
        'assets/images/toyota.png',
      ],
      images: [
        'https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
        'https://russiabusinesstoday.com/wp-content/uploads/2018/07/gas-pipeline.jpg',
        'https://www.nsenergybusiness.com/wp-content/uploads/sites/3/2019/12/pipelines-1632712-740x520.jpg'
      ],
      elems: 3
    },
    {
      logos: [
        'assets/images/gazprom.png',
        'assets/images/toyota.png',
        'assets/images/vodofone.png',
      ],
      images: [
        'https://russiabusinesstoday.com/wp-content/uploads/2018/07/gas-pipeline.jpg',
        'https://www.nsenergybusiness.com/wp-content/uploads/sites/3/2019/12/pipelines-1632712-740x520.jpg',
        'https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
      ],
      elems: 3,
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
