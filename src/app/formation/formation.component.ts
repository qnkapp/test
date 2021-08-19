import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OtherService } from '../service/other.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailFormationComponent } from '../detail-formation/detail-formation.component';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formations: any;
  constructor(private http: HttpClient, private otherService: OtherService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getFormation();
  }

  getFormation(): void {
    this.http.get(this.otherService.lienBack + 'formation').subscribe({
      next: (data) => { this.formations = data },
      error: (err) => { console.log(err) }
    })
  }

  goToDetail(formation: any):void{
    const mydial = this.dialog.open(DetailFormationComponent,{
      data:formation
    });
  }

}
