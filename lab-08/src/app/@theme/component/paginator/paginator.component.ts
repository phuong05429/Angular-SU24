import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() apiUrl!: string;
  @Input() pageSize: number = 10;
  @Input() page: number = 1;
  @Input() totalPage: number = 1;
  @Input() totalRecord: number = 1;

  @Input() current_page!: number;
  @Input() last_page!: number;
  
  @Output() datalist: EventEmitter<any> = new EventEmitter();

  hasPrePage: boolean = true;
  hasNextPage: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.updateButtonsState();
  }

  goFirstPage() {
    this.current_page = 1;
    this.getData();
    this.updateButtonsState();
  }

  goLastPage() {
    this.current_page = this.last_page;
    this.getData();
    this.updateButtonsState();
  }

  goPreviousPage() {
    if (this.current_page > 1) {
      this.current_page--;
      this.getData();
      this.updateButtonsState();
    }
  }

  goNextPage() {
    if (this.current_page < this.last_page) {
      this.current_page++;
      this.getData();
      this.updateButtonsState();
    }
  }

  getPaginator(): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${this.current_page}`);
  }

  getData() {
    this.getPaginator().subscribe(res => {
      this.datalist.emit(res);
    }, err => {
      this.datalist.emit(err);
    });
  }

  updateButtonsState() {
    this.hasPrePage = this.current_page === 1;
    this.hasNextPage = this.current_page === this.last_page;
  }
}
