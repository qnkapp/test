import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OtherService } from '../service/other.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;
  constructor(private http: HttpClient, private otherService: OtherService) { }

  ngOnInit(): void {
    this.recupAllUser();
  }

  recupAllUser(): void {
    this.http.get(this.otherService.lienBack + 'person').subscribe({
      next: (data) => { this.users = data },
      error: (err) => { console.log(err) }
    })
  }

}
