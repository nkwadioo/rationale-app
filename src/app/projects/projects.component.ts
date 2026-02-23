import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';

type ScopeItem = {
  headline: string;
  description: string[];
};

type ClientItem = {
  image: string;
  headline: string;
  services: string;
  client: string;
  location: string;
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [ScrollAnimateDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly activeIndex = signal(0);

  protected readonly scopes: ScopeItem[] = [
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

  protected readonly clients: ClientItem[] = [
    {
      image: '/images/projects/01.jpg',
      headline: 'Puma Filling Station Groblersdal',
      services: 'Fire and Mechanical Engineering services as required for the design, procurement, construction and handover of a new petrol station in Groblersdal.',
      client: 'MADS Architects',
      location: 'Groblersdal | Limpopo Province | South Africa'
    },
    {
      image: '/images/projects/02.jpg',
      headline: 'MACP Tzaneen Hotel',
      services: 'Project Management, Fire Engineering and Architectural services as required for council submission, procurement and construction of new buildings as well as modification of existing ones.',
      client: 'MACP Properties',
      location: 'Tzaneen | Limpopo Province | South Africa'
    },
    {
      image: '/images/projects/04.jpg',
      headline: 'Rapulana Clinic',
      services: 'Fire Engineering services as required for the design, procurement, construction and handover of a new clinic.',
      client: 'AM Consulting Engineers',
      location: 'Mahikeng | North West Province | South Africa'
    },
    {
      image: '/images/projects/06.jpg',
      headline: 'TruckStore Phase 2',
      services: 'Fire Engineering services as required for the council approval for the planned extension fo the Truck Store Warehouse.',
      client: 'DSP Consulting cc',
      location: 'Centurion | Gauteng Province | South Africa'
    },
    {
      image: '/images/projects/11.jpg',
      headline: 'Atomo Diagnostics',
      services: 'Fire Engineering services as required for rational design for the Atomo Diagnostics warehouse.',
      client: 'ME Engineers',
      location: 'Cape Town | Western Cape Province | South Africa'
    },
    {
      image: '/images/projects/10.jpg',
      headline: 'Nancefield Precinct Development',
      services: 'Fire Engineering services as required for the design, procurement, construction supervision and handover of a low cost housing complex.',
      client: 'Johannesburg Social Housing COmpany',
      location: 'Soweto | Gauteng Province | South Africa'
    },
    {
      image: '/images/projects/13.jpg',
      headline: 'Cisco SA Head Quarters Internal Layout ',
      services: 'Fire Engineering and Architectural services as required for the design, council submission and occupancy of the Cisco SA head office internal layout changes.',
      client: 'DSP Consulting cc',
      location: 'Bryanston | Gauteng Province | South Africa'
    },
  ];

  prevProject(): void {
    this.activeIndex.update((i) => (i > 0 ? i - 1 : this.clients.length - 1));
  }

  nextProject(): void {
    this.activeIndex.update((i) => (i < this.clients.length - 1 ? i + 1 : 0));
  }
}
