import { Angspring } from './../../model/angspring';
import { AngspringsService } from '../../services/angsprings.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';



@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent implements OnInit {

  form= this.formBuilder.group({
    _id:[''],
    name:[''],
    category:['']

  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: AngspringsService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute

  ) {
      //this.form;
   }

  ngOnInit(): void {
    const angsp: Angspring = this.route.snapshot.data['angspring'];
    this.form.setValue({
      _id: angsp._id,
      name: angsp.name,
      category: angsp.category

    });
  }

  onSubmit(){

    this.service.save(this.form.value).
    subscribe(result=>this.onSuccess(), error=> this.onError());

  }

  onCancel(){
    this.location.back();
}

private onSuccess(){
  this.snackBar.open('Curs added successfull','', {duration:3000});
  this.onCancel();
}
private onError(){
  this.snackBar.open('Error to save curs!','', {duration:3000});
}
}
