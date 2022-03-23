import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-db-form',
  templateUrl: './db-form.component.html',
  styleUrls: ['./db-form.component.css']
})
export class DbFormComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  mdbForm = new FormGroup ({
    document_number: new FormControl(''),
    content: new FormControl('')
  })

  onSubmit(event: SubmitEvent) {
    const doc:string = this.mdbForm.get('content')?.value
    if (event?.submitter?.innerHTML == "PUT") {
      console.log("THIS IS A PUT REQUEST")
      this.httpService.upDate(doc).subscribe((data) => {
        console.log(data)
      })
      // -------------------------------------------------
    } else if (event?.submitter?.innerHTML == "POST") {
      //console.log(JSON.parse(this.mdbForm.get('content')?.value))
      this.httpService.addDoc(doc).subscribe((data) => {
        console.log(data)
      })
      // -------------------------------------------------
    } else if (event?.submitter?.innerHTML == "GET") {
      console.log("THIS IS A GET REQUEST")
      console.log(this.mdbForm.get('document_number')?.value)
      if (this.mdbForm.get('document_number')?.value == '' || this.mdbForm.get('document_number')?.value == 0) {
        this.httpService.getfullCol().subscribe((data) => {
          console.log(data);
        })
      } else {
        const doc_numero:number = this.mdbForm.get('document_number')?.value
        //this.httpService.getSpecCol(doc_numero)
      }
      // ---------------------------------------------------
    } else if (event?.submitter?.innerHTML == "DELETE") {
      console.log("THIS IS A DELETE REQUEST")
    }
  }

}
