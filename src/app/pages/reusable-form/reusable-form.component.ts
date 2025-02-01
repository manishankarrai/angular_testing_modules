import { Component , OnInit  , DoCheck  , OnChanges, OnDestroy, SimpleChanges  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrl: './reusable-form.component.css'
})
export class ReusableFormComponent implements OnInit  , DoCheck  , OnChanges ,OnDestroy  {
      
      userInfo : FormGroup ;
    //   = new FormGroup({
    //     firstName : new FormControl('' ,  Validators.required) ,
    //     lastName: new FormControl('') ,
    //     department : new FormControl('' , Validators.required) ,
    // })
      departmentInfo : string [] =  ['sales' , 'marketing' ,  'IT' ,  'Accoount' , 'HR' ];
      departmentInfoObj : {  name : string  , value : string  } [] =  [
          { name : 'Sales' , value : 'sales'  }  ,
          { name : 'Marketing' , value : 'marketing'  }  ,
          { name : 'IT' , value : 'it'  }  ,
          { name : 'Accoount' , value : 'accoount'  }  ,
          { name : 'HR' , value : 'hr'  }  ,

      ];

    constructor(private fb: FormBuilder){
           
            this.userInfo =  this.fb.group({
                firstName : new FormControl('') ,
                lastName: new FormControl('') ,
                department : new FormControl('' , Validators.required) ,
            });
            this.userInfo.valueChanges.subscribe((item)=>{
                console.log("some value is changed" , item)
            });
            this.userInfo.get('department')?.valueChanges.subscribe(item =>{
               console.log('select value is changed' , item)
            })

      }
      get firstNameControl(): FormControl {
        return this.userInfo.get('firstName') as FormControl;
      }
      get lastNameControl(): FormControl {
        return this.userInfo.get('lastName') as FormControl;
      }
      get departmentControl(): FormControl {
        return this.userInfo.get('department') as FormControl;
      }
      // firstNameEvent(val :string ) : void {
      //     console.log("value  of string is " , val)
      // }
      ngOnSubmit(): void {
          console.log(this.userInfo.value);
      }
      ngOnInit(): void {
        
      }
      ngDoCheck(): void {
        
      }
      ngOnChanges(changes: SimpleChanges): void {
        
      }
      ngOnDestroy(): void {
        
      }
}
