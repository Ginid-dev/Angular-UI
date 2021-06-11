import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  images: any = [
    'https://bgcheck.vetzu.com/assets/images/AR.png',
    'https://bgcheck.vetzu.com/assets/images/master-card.jpg',
    'https://bgcheck.vetzu.com/assets/images/Visa.png',
  ];
  constructor() {}

  ngOnInit(): void {}
}
