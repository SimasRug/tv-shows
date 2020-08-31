import { Component, OnInit } from '@angular/core';
import { SocketioService } from 'src/app/services/socket-io/socketio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private socketService: SocketioService, private router: Router) { }

  ngOnInit(): void {
  }

  searchForProgram(program) {
    this.socketService.searchProgram(program);
    this.router.navigate(['search']);
    
  }

}
