import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Angspring } from '../../model/angspring';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.scss']
})
export class AngularListComponent implements OnInit {
  @Input() angsprings: Angspring[]=[];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns=['name','category','Actions'];
  constructor( private router: Router,

  private route:ActivatedRoute) { }

  ngOnInit(): void {}

  onAdd(){

    this.add.emit(true);
   // this.router.navigate(['new'], {relativeTo: this.route});
 }

}
