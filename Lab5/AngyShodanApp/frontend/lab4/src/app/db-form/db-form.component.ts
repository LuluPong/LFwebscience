import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-db-form',
  templateUrl: './db-form.component.html',
  styleUrls: ['./db-form.component.css']
})
export class DbFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mdbForm = new FormGroup ({
    document_number: new FormControl(''),
    content: new FormControl('')
  })

  onSubmit(event: SubmitEvent) {
    if (event?.submitter?.innerHTML == "PUT") {
      console.log("THIS IS A PUT REQUEST")
    } else if (event?.submitter?.innerHTML == "POST") {
      console.log("THIS IS A POST REQUEST")
    } else if (event?.submitter?.innerHTML == "GET") {
      console.log("THIS IS A GET REQUEST")
      console.log(this.mdbForm.get('document_number')?.value)
    } else if (event?.submitter?.innerHTML == "DELETE") {
      console.log("THIS IS A DELETE REQUEST")
    }
  }

}
