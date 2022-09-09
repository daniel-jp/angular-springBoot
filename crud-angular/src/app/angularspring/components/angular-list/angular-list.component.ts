import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Angspring } from '../../model/angspring';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.scss']
})
export class AngularListComponent implements OnInit {

  @Input() angsprings: Angspring[]=[];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns=['_id','name','category','Actions'];
  constructor(){}

  ngOnInit(): void {}

  onAdd(){
    this.add.emit(true);
 }

onEdit(angspring: Angspring) {
  this.edit.emit(angspring);
}
onDelete(angspring: Angspring) {
  this.remove.emit(angspring);
}
}
