import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';

type ServiceItem = {
  icon: string;
  headline: string;
  description: string[];
};

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  imports: [ScrollAnimateDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  protected readonly services: ServiceItem[] = [
    {
      icon: 'local_fire_department',
      headline: 'Fire Engineering',
      description: [
        'Fire safety engineering and rational design',
        'Smoke detection and ventilation strategies',
        'Automatic suppression systems',
        'Hazardous substance planning and audits',
      ],
    },
    {
      icon: 'settings_suggest',
      headline: 'Mechanical Engineering',
      description: [
        'HVAC design and commissioning',
        'Wet services and medical gas reticulation',
        'On-site storage and pump systems',
        'Thermal plant and hot water systems',
      ],
    },
    {
      icon: 'foundation',
      headline: 'Civil & Structural',
      description: [
        'Structural design and analysis',
        'Concrete and structural steel',
        'Bulk services establishment',
        'Earthworks planning and supervision',
      ],
    },
    {
      icon: 'architecture',
      headline: 'Architecture',
      description: [
        'Building and site plans',
        'Energy and fenestration calculations',
        'Council submissions and approvals',
      ],
    },
    {
      icon: 'bolt',
      headline: 'Electrical Engineering',
      description: [
        'Power transmission and distribution',
        'Earthing and lightning protection',
        'Internal and external reticulation',
        'UPS, generators, and solar systems',
      ],
    },
    {
      icon: 'request_quote',
      headline: 'Quantity Surveying',
      description: [
        'Project cost management',
        'Specifications and bills of quantities',
        'Tender evaluation and adjudication',
        'Comprehensive cost estimation',
      ],
    },
  ];
}
