import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private metaTagService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Home Page');
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Home page with login and logout features' },
      { name: 'description', content: 'This is the home page of the Angular Universal application.' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

}
