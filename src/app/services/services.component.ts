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
        image: './assets/images/services/fire.svg',
        headline: 'Fire Engineering',
        description: [
          'Fire Safety Engineering',
          'Smoke Detection',
          'Smoke Ventilation',
          'Automatic Fire Suppression Systems',
          'Hazardous Substance Design',
          'Building Audits',
          'Code Compliant/Rational Design'
        ]
      },
      {
        image: './assets/images/services/enginer.svg',
        headline: 'Mechanical Engineering',
        description: [
          'HVAC Systems',
          'Wet Services Design',
          'Medical Gas Reticulation',
          'On-site Water Storage and Pump Systems',
          'Hot Water Plant',
        ]
      },
      {
        image: './assets/images/services/civil.svg',
        headline: 'Civil and Structural',
        description: [
          'Structural Design and Analysis',
          'Concrete Design',
          'Structural Steel',
          'Bulk Services Establishment',
          'Earthworks',
        ]
      },
      {
        image: './assets/images/services/architecture.svg',
        headline: 'Architecture',
        description: [
          'Building Plans',
          'Fenestration Calculations and Energy Calculations',
          'Council Submission and Running',
        ]
      },
      {
        image: './assets/images/services/electricity.svg',
        headline: 'Electrical Engineering',
        description: [
          'Power Transmission and Distribution',
          'Lighting Protection and Earthing',
          'Internal and External Reticulationa and Lighting',
          'UPS and Generators',
          'Solar Systems',
        ]
      }
    ];
    
  }


}
