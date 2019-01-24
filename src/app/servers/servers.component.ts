import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.scss"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName ='TestServer';
  serverCreatedStatus = "Server is not created!";
  serverCreated= false;
  servers=['TestServer','TestServer 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}


  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  UpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
