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
    //Keys have to be a string encapsulated in ""
    if (event?.submitter?.innerHTML == "PUT") {
      console.log("THIS IS A PUT REQUEST")
      const DN:string = this.mdbForm.get('document_number')?.value
      const CN:string = this.mdbForm.get('content')?.value
      if (DN == '' || DN == '0') {
        this.httpService.upDate(doc).subscribe((data) => {
          console.log(data)
        })
      } else if (!(DN == '' || DN == '0')) {
        this.httpService.upDateSpec(Number(DN), CN).subscribe((data) => {
          console.log(data)
        })
      }
      // -------------------------------------------------
    } else if (event?.submitter?.innerHTML == "POST") {
      //console.log(JSON.parse(this.mdbForm.get('content')?.value))
      this.httpService.addDoc(doc).subscribe((data) => {
        console.log(data)
      })
      // -------------------------------------------------
    } else if (event?.submitter?.innerHTML == "GET") {
      console.log("THIS IS A GET REQUEST")
      if (this.mdbForm.get('document_number')?.value == '' || this.mdbForm.get('document_number')?.value == '0') {
        this.httpService.getfullCol().subscribe((data) => {
          console.log(data);
        })
      } else {
        const doc_numero:number = this.mdbForm.get('document_number')?.value
        this.httpService.getSpecCol(doc_numero).subscribe((data) => {
          console.log(data)
        })
      }
      // ---------------------------------------------------
    } else if (event?.submitter?.innerHTML == "DELETE") {
      const doc_numero:number = this.mdbForm.get('document_number')?.value
      console.log("THIS IS A DELETE REQUEST")
      this.httpService.deleteSpec(doc_numero).subscribe((data) => {
        console.log(data)
      })
    }
  }

}
