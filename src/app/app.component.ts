import { Component, OnInit } from '@angular/core';
import { SocketioService } from './services/socket-io/socketio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tv-show';




  constructor(private socketioService: SocketioService) {

  }

  ngOnInit(): void {
    this.socketioService.getSchedule();

  }

}
