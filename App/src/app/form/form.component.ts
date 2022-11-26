import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Student} from "../../student"; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( ) { }

  //start with an empty student array 
   Students: Student[] = []; 
   showtable: boolean = false; 
   equation = "$Total Payment = Loan Payment * 	 |{  i*(1+i)^n \\over (1+i)^n-1} | $";
 


   FormInfo = new FormGroup( {
    id: new FormControl(0),
    name: new FormControl(""), 
    topic: new FormControl("")
  }); 


   Loans = new FormGroup({
    amount: new FormControl(0), 
    rate: new FormControl(0, [Validators.required, Validators.pattern(/^0?\.\d+$/)]),
    time: new FormControl(0)
   })

   ngOnInit(): void {
  
   }

   checkdecimel() {          
    // console.log(/^0?\.\d+$/.test(x)); 
   }

   get rate() {  return this.Loans.get('rate'); }

   onCalculate() {
    this.showtable = true;      
    this.amorization(this.Loans.value.amount!,this.Loans.value.rate!, this.Loans.value.time!); 
   }
  
      ultimate_array: Array<{id:number, monthly_payment: number, interest:number, principle_payed: number, principle:number}> = []
   
      total_Interest: number = 0; 
      totalInterest() {
        let total = 0; 
        for(let x = 0; x<this.ultimate_array.length;x++) {
         total = total + this.ultimate_array[x].interest; 
         // console.log('total interest here'); 
        //  console.log(this.ultimate_array[x].interest); 
           //console.log(total); 
           this.total_Interest = total; 
        }
        
      }


      total_principle : number = 0; 
       totalPayment() {
        let total = 0; 
        for(let x = 0; x<this.ultimate_array.length;x++) {
         total = total + this.ultimate_array[x].monthly_payment; 
            this.total_principle = total; 
        }
        
      }

      total_principle_due : number = 0; 
      totalPrinciple() {
        let total = 0; 
        for (let x =0; x<this.ultimate_array.length; x++) {
          total = total + this.ultimate_array[x].principle_payed; 
          console.log(total);
          this.total_principle_due = total; 
        }
      }
   
      amorization(amount:number, interest_rate: number, time: number) {
         
          // check if there is already values in the form, if there is clear the form array
           if (this.ultimate_array.length>0) {


                    this.ultimate_array = []; 
                        //shoud the form values be reset after clicking on the button? 
                       //this.Loans.reset(); 
           }

          let monthlyinterest = interest_rate/12; 
          console.log(monthlyinterest); 
          let monthlyinterest_addone = 1+monthlyinterest; 

         //calculating the monthly payement 
          let num = monthlyinterest*Math.pow(monthlyinterest_addone, time)
          let den = Math.pow(monthlyinterest_addone,time)-1; 
          const monthly_payment =  amount*(num/den) 
          console.log(monthly_payment); 

          let money_left = amount 

          //just add these values into an array and volia your good to go!
      for (let x = 0; x<time; x++) {  
        //this is the  firstn row...
          let interest_monthly = money_left*(interest_rate/12)
        //  console.log(interest_monthly);
    
          //the amount that goes to principle
          let principle_paid_monthly = monthly_payment-interest_monthly; 
        // console.log(principle_paid_monthly);        
          money_left = money_left-principle_paid_monthly; 
         // console.log(money_left)
   
         let principle_object = {id: x, monthly_payment: monthly_payment, interest: interest_monthly, principle_payed: principle_paid_monthly ,principle: money_left}
         this.ultimate_array.push(principle_object); 
  
        }

         this.totalPayment(); 
         this.totalInterest(); 
         this.totalPrinciple(); 
          

        
        }



        



}
