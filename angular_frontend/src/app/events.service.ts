// import { Injectable } from '@angular/core';
// import { Events } from './event';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventsService {

//   constructor() { }
// }
// export class EventService {

//   baseUrl = 'http://localhost/angular_projects/angular_frontend/api';

//   constructor(private http: HttpClient) { }

//   getAll() {
//     return this.http.get(`${this.baseUrl}/index.php`).pipe(
//       map((res: any) => {
//         return res['data'];
//       })
//     );
// }
// }
