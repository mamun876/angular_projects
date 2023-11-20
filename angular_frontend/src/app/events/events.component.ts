// import { Component, OnInit } from '@angular/core';
// import { EventsService } from '../events.service';
// import { Events } from '../event';

// @Component({
//   selector: 'app-events',
//   templateUrl: './events.component.html',
//   styleUrls: ['./events.component.css']
// })
// export class EventsComponent implements OnInit {
//   events: Events[] = [];
//   error = '';
//   success = '';

//   event: Events = {
//     id: 0,
//     title: '',
//     date_created: '',
//     description: '',
//     img: ''
//   }
  
//   constructor(private eventsService: EventsService) {
//   }
        
//   ngOnInit() {
//     this.getEvents()
//   }
        
//   getEvents(): void {
//     this.eventsService.getAll().subscribe(
//       (data: Events[]) => {
//         this.events = data;
//         // console.log(data);
//         this.success = 'successful';
//       },
      
//     );
//   }
// }
