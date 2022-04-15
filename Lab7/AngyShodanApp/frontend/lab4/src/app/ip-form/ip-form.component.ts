import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ip-form',
  templateUrl: './ip-form.component.html',
  styleUrls: ['./ip-form.component.css']
})
export class IpFormComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: string) {
    interface testObject {
      [key: string]: any;
    }

    const myIP = document.getElementById("ipAddress") as HTMLInputElement;
    myIP.textContent = '';
    const loc = document.getElementById("location") as HTMLInputElement;
    loc.textContent = '';
    const hName = document.getElementById("hostname") as HTMLInputElement;
    hName.textContent = '';
    const doms = document.getElementById("domains") as HTMLInputElement;
    doms.textContent = '';
    const intSP = document.getElementById("ISP") as HTMLInputElement;
    intSP.textContent = '';
    const porty = document.getElementById("ports") as HTMLInputElement;
    porty.textContent = '';
    const issue = document.getElementById("issuer") as HTMLInputElement;
    issue.textContent = '';
    const exp = document.getElementById("expire") as HTMLInputElement;
    exp.textContent = '';
    const jar = document.getElementById("jarm") as HTMLInputElement;
    jar.textContent = '';
    const sigAlg = document.getElementById("sig_alg") as HTMLInputElement;
    sigAlg.textContent = '';
    const j3 = document.getElementById("ja3s") as HTMLInputElement;
    j3.textContent = '';
    const pubkey = document.getElementById("pkt") as HTMLInputElement;
    pubkey.textContent = '';
    this.httpService.exploreIP(JSON.stringify(data)).subscribe((data: testObject) => {
      //const test = JSON.parse(data);
      myIP.textContent = data['ip_str'];

      loc.textContent = `${data['city']}, ${data['region_code']}, ${data['country_name']}`;

      if (data['hostnames'].length > 0) {
        hName.textContent = '';
        data['hostnames'].forEach( function(host: string) {
          hName.textContent += `${host} `;
        });
      }

      if (data['domains'].length > 0) {
        doms.textContent = '';
        data['domains'].forEach( function(domain: string) {
          doms.textContent += `${domain} `
        })
      }
      
      intSP.textContent = data['isp'];

      if (data['ports'].length > 0) {
        porty.textContent = '';
        data['ports'].forEach( function(port: string) {
          porty.textContent += `${port} `;
        })
      }

      if (data['data'].length > 0) {
        data['data'].forEach( function(hn:any) {
          if (hn.hasOwnProperty('ssl')) {
            console.log(hn['ssl']['jarm']);
            jar.textContent = hn['ssl']['jarm'];
            j3.textContent = hn['ssl']['ja3s'];
            exp.textContent = hn['ssl']['cert']['expires'];
            issue.textContent = hn['ssl']['cert']['issued'];
            sigAlg.textContent = data['last_update'];
            pubkey.textContent = data['last_update'];
          }
        })
      }

    })
  }
}

