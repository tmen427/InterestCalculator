import { Component, OnInit } from '@angular/core';
import { CallsService } from '../calls.service';
import {Student} from '../../student'; 
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],

})
export class HistoryComponent implements OnInit {

  constructor(private CallingService: CallsService) { }
  Students :  Student[] = [];  
  FormInfo = new FormGroup( {
    id: new FormControl(0),
    name: new FormControl(""), 
    topic: new FormControl("")
  }); 

  ngOnInit(): void {
    this.CallingService.getStudents().subscribe( (data:Student[])=> {
            this.Students = data; 
   
   
          })}

          onSubmit() {
            console.log(this.FormInfo.value); 
            this.CallingService.postStudents(this.FormInfo.value).subscribe((data)=> {
              console.log("in the submit button"); 
              console.log(data); 
            })
            //write the code to the httpclient in order to post in your backend database
          }
        
       
    
  

}
