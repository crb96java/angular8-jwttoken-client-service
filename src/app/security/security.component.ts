import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest:any={
    "userName":"user3",
    "password":"pwd3"
  };

  response:any;

  constructor(private service:JwtClientService) { }

  ngOnInit() {
    this.getAccessToken(this.authRequest);
  }

public getAccessToken(authRequest){
let resp=this.service.generateToken(authRequest);
//resp.subscribe(data=>console.log("Token + "+data));
resp.subscribe(data=>this.accessApi(data));
  }


public accessApi(token){
let resp=this.service.welcome(token);
resp.subscribe(data=>this.response=data);
  }
 }

