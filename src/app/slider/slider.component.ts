import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit, AfterViewInit {
  slideIndex = 1;
  setInterConter = 0;

  images: string[];

  constructor() { }

  ngOnInit(): void {
    this.images = ['01', '02', '03', '04', '05', '06'];
    

    // setInterval()
  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);

    setInterval( () => {
      if (this.setInterConter > 2) {
        this.plusSlides(1);
        this.setInterConter = 0;
        console.log('auto slide');
      }
      this.setInterConter++;
    }, 3000);

    // setInterval()
  }

  /* Slideshow JavaScript */
  
  

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
    this.setInterConter = 0;
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
    this.setInterConter = 0;
  }

  showSlides(n) {
    let i;
    let slides: any = document.getElementsByClassName("mySlides_2");
    console.log('[slider] change slide')
    // let dots: any = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].classList.remove("active");
    // }
    slides[this.slideIndex-1].style.display = "block";
    // dots[this.slideIndex-1].classList.add("active");
  }
/* Slideshow JavaScript */

}
