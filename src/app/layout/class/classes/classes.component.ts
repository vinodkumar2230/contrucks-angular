import { Component, OnInit } from '@angular/core';
// import { DataService } from "../../../services/data.service";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {


  data: any[];
  companyName: any;
 public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "class";
    public sortOrder = "asc";
  constructor() { }
  ngOnInit() {


  //   this.service.getData().subscribe((posts) => {
  //     console.log(posts);
  //     this.data = posts;
  //  //   console.log(this.data);
 //   });
  }
     public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.class.length;
    }
  }

