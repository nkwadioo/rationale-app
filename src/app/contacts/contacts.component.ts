import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  subjectVal;
  userVal;
  descriptionVal;

  constructor() { }

  ngOnInit(): void {
  }

  validateInput(form: NgForm) {

    // use Ecorrections show form error
    if(form.invalid) {
      alert('Form is incomplite.');
      return;
    }
    // pop up
    alert('Thank you for keeping contact')
  }

}
