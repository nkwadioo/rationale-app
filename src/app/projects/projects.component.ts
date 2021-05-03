import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  slideIndex = 1;
  scopes = [
    {
      headline: 'Inception',
      description: [
        'Agreed scope of services and scope of works.',
        'Signed agreement.',
        'Report on project, site and functional requirements.',
        'Schedule of required surveys, tests, analysis, site and other investigations.',
        'Schedule of consents and approvals',
      ]
    },
    {
      headline: 'Concept and Viability',
      description: [
        'Concept design.',
        'Schedule of required surveys, tests and other investigations and related reports.',
        'Process design.',
        'Preliminary design.',
        'Cost estimates.',
      ]
    },
    {
      headline: 'Design Development',
      description: [
        'Design development drawings.',
        'Outline specifications.',
        'Local and other authority submission drawings and reports.',
        'Detailed estimates of construction costs.',
      ]
    },
    {
      headline: 'Documentation and Procurement',
      description: [
        'Specifications.',
        'Services co-ordination.',
        'Working drawings.',
        'Budget construction costs.',
        'Tender documentation.',
        'Tender evaluation reports.',
        'Tender recommendations.',
        'Priced contract documentation.',
      ]
    },
    {
      headline: 'Contract Administration and Inspection',
      description: [
        'Services co-ordination.',
        'Working drawings.',
        'Budget construction costs.',
        'Tender documentation.',
        'Tender evaluation reports.',
        'Tender recommendations.',
        'Priced contract documentation.',
      ]
    },
    {
      headline: 'Close-Out',
      description: [
        'Valuation for payment certificates.',
        'Works and final completion.',
        'Operational and maintenance manuals, guarantees and warranties.',
        'As-built drawings and documentation.',
        'Final accounts',
      ]
    },
    {
      headline: 'Audits, Investigations and Assessments',
      description: [
        'Collation of information.',
        'Reports on technical and financial feasibility and related implications.',
        'List of consents and approvals.',
        'Schedule of required surveys, test, analyses, site and other investigations.',
      ]
    }
  ];

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
