import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  services = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.services = [
      {
        image: '/assets/images/services/project_inception.svg',
        headline: 'Project inception and feasibility',
        body: ''
      },
      {
        image: '/assets/images/services/design_cost.svg',
        headline: 'System concept and Detailed design, specification and cost estimateTender documentation and adgudication',
        body: ''
      },
      {
        image: '/assets/images/services/contract.svg',
        headline: 'Tender documentation and adgudication',
        body: ''
      },
      {
        image: '/assets/images/services/qa_engineers.svg',
        headline: 'Constuction suppervision and administration',
        body: ''
      },
      {
        image: '/assets/images/services/handover.svg',
        headline: 'System independence and/or intergrated commissioning and handover',
        body: ''
      },
      {
        image: '/assets/images/services/audit.svg',
        headline: 'Building audits and Due deligence execises',
        body: ''
      },
      {
        image: '/assets/images/services/perspective.svg',
        headline: 'Perspective and retional design',
        body: ''
      },
      {
        image: '/assets/images/services/droughting.svg',
        headline: 'Droughting services',
        body: ''
      }
    ];
    
  }


}
