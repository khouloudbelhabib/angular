import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-listederendezvous',
  templateUrl: './listederendezvous.component.html',
  styleUrls: ['./listederendezvous.component.css']
})
export class ListederendezvousComponent implements OnInit {

  constructor() { }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  ngOnInit(): void {
  }

}
