import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  slideIndex = 1;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
    
  }

  /* Slideshow JavaScript */
  
  

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides: any = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length};
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex-1].style.display = "block";
    }
  }
/* Slideshow JavaScript */

}
