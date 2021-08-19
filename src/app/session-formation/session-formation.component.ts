import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OtherService } from '../service/other.service';

@Component({
  selector: 'app-session-formation',
  templateUrl: './session-formation.component.html',
  styleUrls: ['./session-formation.component.css']
})
export class SessionFormationComponent implements OnInit {

  sessionsF: any;
  constructor(private http: HttpClient, private otherService: OtherService) { }

  ngOnInit(): void {
    this.recupAllSessionFormation();
  }

  recupAllSessionFormation(): void {
    this.http.get(this.otherService.lienBack + 'session_formation').subscribe({
      next: (data) => { this.sessionsF = data },
      error: (err) => { console.log(err) }
    });
  }

}
