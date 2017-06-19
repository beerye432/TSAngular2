import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data', 
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: any = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
        this.dataService.getDataset(params['set']).subscribe(data => this.data = data);
    });
  }
}
