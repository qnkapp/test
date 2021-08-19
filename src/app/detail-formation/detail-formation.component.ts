import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OtherService } from '../service/other.service';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent implements OnInit {

  sessionFormation:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private htpp:HttpClient,private otherService:OtherService) { }

  ngOnInit(): void {
    this.sessionFormationByFormationId();
  }

  sessionFormationByFormationId():void{
    this.htpp.get(this.otherService.lienBack+'session_formation/formation/'+this.data.id).subscribe({
      next : (data)=>{this.sessionFormation=data},
      error : (err)=>{console.log(err)}
    });
  }

}
