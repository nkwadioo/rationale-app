import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type ContactFormControls = {
  fullName: FormControl<string>;
  email: FormControl<string>;
  service: FormControl<string>;
  description: FormControl<string>;
};

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contact-page'
  }
})
export class ContactsComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly serviceOptions = [
    'Fire Engineering',
    'Mechanical Engineering',
    'Civil & Structural',
    'Architecture',
    'Electrical Engineering',
    'Quantity Surveying',
  ];

  readonly contactForm = this.fb.group<ContactFormControls>({
    fullName: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(3)]
    }),
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email]
    }),
    service: this.fb.control('Fire Engineering'),
    description: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(10)]
    })
  });

  submitAttempted = false;

  get mailtoHref(): string {
    const value = this.contactForm.getRawValue();
    const subject = value.service?.trim();
    if (!subject) {
      return '';
    }

    const safeName = value.fullName?.trim();
    const safeEmail = value.email?.trim();
    const safeDescription = value.description?.trim();
    const bodyParts = [safeName, safeEmail, safeDescription].filter(Boolean);
    const body = encodeURIComponent(bodyParts.join('\n\n'));

    return `mailto:enquiries@rationale.co.za?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  onSubmit(): void {
    this.submitAttempted = true;
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      return;
    }

    const href = this.mailtoHref;
    if (href) {
      window.location.href = href;
    }
  }

  getError(controlName: keyof ContactFormControls): string | null {
    const control = this.contactForm.controls[controlName];
    if (!control) {
      return null;
    }

    const shouldShow = control.invalid && (control.touched || this.submitAttempted);
    if (!shouldShow) {
      return null;
    }

    if (control.hasError('required')) {
      return 'This field is required.';
    }

    if (control.hasError('email')) {
      return 'Please enter a valid email address.';
    }

    if (control.hasError('minlength')) {
      const requiredLength = control.getError('minlength')?.requiredLength;
      return requiredLength ? `Use at least ${requiredLength} characters.` : 'Input is too short.';
    }

    return 'Please check this field.';
  }
}
