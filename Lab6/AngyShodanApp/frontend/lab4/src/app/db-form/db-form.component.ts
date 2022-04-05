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

  returnedContent: string= ""
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  mdbForm = new FormGroup ({
    document_number: new FormControl(''),
    content: new FormControl(''),
    collection_choice: new FormControl('')
  })

  onSubmit(event: SubmitEvent) {
    const doc:string = this.mdbForm.get('content')?.value
    const col_type:string = this.mdbForm.get('collection_choice')?.value
    //Keys have to be a string encapsulated in ""
    if (event?.submitter?.innerHTML == "PUT") {
      console.log("THIS IS A PUT REQUEST")
      const DN:string = this.mdbForm.get('document_number')?.value
      const CN:string = this.mdbForm.get('content')?.value
      if (DN == '' || DN == '0') {
        this.httpService.upDate(doc).subscribe((data) => {
          console.log(data)
          this.returnedContent = "All documents updated"
        })
      } else if (!(DN == '' || DN == '0')) {
        this.httpService.upDateSpec(Number(DN), CN).subscribe((data) => {
          this.returnedContent = "Document updated"
        })
      }
      // -------------------------------------------------
    } else if (event?.submitter?.innerHTML == "POST") {
      if (this.mdbForm.get('collection_choice')?.value == 'test collection') {
        if (this.mdbForm.get('document_number')?.value == '') {
          this.httpService.addDoc(doc).subscribe((data) => {
            console.log(data)
            this.returnedContent = "Document added"
          })
        } else {
          this.returnedContent = "Document cannot be added to another document.\nPlease clear the document ID field."
        }
      } else {
        console.log('lab 6 collection instead')
        if (this.mdbForm.get('document_number')?.value == '') {
          
          const idk:string = `{"col": "lab 6", "con": ${doc}}` 

          this.httpService.addDoc_Dup(idk).subscribe((data) => {
            console.log(data)
            this.returnedContent = "Document added"
          })
        } else {
          this.returnedContent = "Document cannot be added to another document.\nPlease clear the document ID field."
        }
      }
      // -------------------------------------------------
    } else if (event?.submitter?.innerHTML == "GET") {
      console.log("THIS IS A GET REQUEST")
      console.log(this.mdbForm.get('collection_choice')?.value)
      if (this.mdbForm.get('document_number')?.value == '' || this.mdbForm.get('document_number')?.value == '0') {
        this.httpService.getfullCol().subscribe((data) => {
          this.returnedContent = JSON.stringify(data, undefined, 4)
        })
      } else {
        const doc_numero:number = this.mdbForm.get('document_number')?.value
        this.httpService.getSpecCol(doc_numero).subscribe((data) => {
          if (JSON.stringify(data) === "[]") {
            this.returnedContent = "There is no document in the database with this ID.\nPlease enter a valid document ID (doc_id)."
          } else {
            this.returnedContent = JSON.stringify(data, undefined, 4)
          }
        })
      }
      // ---------------------------------------------------
    } else if (event?.submitter?.innerHTML == "DELETE") {
      const doc_numero:string = this.mdbForm.get('document_number')?.value
      console.log("THIS IS A DELETE REQUEST")
      if (col_type == "test collection") {
        if (doc_numero == '' || doc_numero == '0') {
          this.httpService.deleteFIN().subscribe((data) => {
            this.returnedContent = "All documents deleted successfully"
          })
        } else {
          this.httpService.deleteSpec(doc_numero).subscribe((data) => {
            this.returnedContent = `Document ${doc_numero} deleted successfully`
          })
        }
      } else {
        if (doc_numero == '' || doc_numero == '0') {
          this.httpService.deleteFIN_Dup().subscribe((data) => {
            this.returnedContent = "All documents deleted successfully"
          })
        }
      }
    }
  }
}
