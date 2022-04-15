import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-my-ipbutton',
  templateUrl: './my-ipbutton.component.html',
  styleUrls: ['./my-ipbutton.component.css']
})
export class MyIPbuttonComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public getIP() {
    this.httpService.getMyIP().subscribe((data) => {
      console.log(JSON.stringify(data));
      const myIP = document.getElementById("ipAddress") as HTMLInputElement;
      myIP.textContent = JSON.stringify(data);
    //console.log("it works?")
    })
  }
}