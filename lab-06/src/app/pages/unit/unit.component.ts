import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/@core/service/api/unit.service';

export interface Iunit {
  id: string;
  name: string;
  address: string;
  description: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  title:string = ""
  isDialogOpen: boolean = false;
  isDeleteDialogOpen:boolean = false;
  isEdit:boolean = false;
  dataUnit:any = {}
  listUnit: Iunit[] = [];
  totalUnits: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  pages: number[] = [];
  constructor(private unit: UnitService) { }

  ngOnInit(): void {
    this.getUnit(1);
  }
  getUnit(page: number): void {
    this.unit.getUnits(page, this.pageSize).subscribe({
      next: (res: any) => {
        if (res && res.data && Array.isArray(res.data)) {
          this.listUnit = res.data;
          this.totalUnits = res.meta ? res.meta.total : 0;
          const lastPage = res.meta ? res.meta.last_page : 1;
          this.pages = Array.from({ length: lastPage }, (_, i) => i + 1);
          console.log(this.pages);
        } else {
          console.error('Định dạng phản hồi không hợp lệ:', res);
        }
      },
      error: (err: any) => {
        console.error('Lỗi tìm nạp đơn vị:', err);
      }
    });
  }
  openDialog() {
    this.isDialogOpen = true;
  }
  openDialogDelete(post:any){
    this.isDeleteDialogOpen = true
    this.dataUnit = post
    this.title = "Bạn có muốn xóa " + post.name
  }

  close(){
    this.isDeleteDialogOpen = false
    this.dataUnit = {}
  }

  handleDelete() {
    const unitId = this.dataUnit.id; // Lấy ID của đơn vị cần xóa
    if (unitId) {
      this.unit.deleteUnit(unitId).subscribe({
        next: () => {
          this.isDeleteDialogOpen = false;
          this.dataUnit = {};
          this.getUnit(this.currentPage);
        },
        error: (err) => {
          console.error('Lỗi khi xóa đơn vị:', err);
        },
      });
    } else {
      console.error('Không thể xóa đơn vị vì ID không hợp lệ.');
    }
  }
  
  
  closeDialog() {
    this.isDialogOpen = false;
    this.isEdit = false;
    this.dataUnit={} 
  }

  reloadPage() {
    this.getUnit(this.currentPage)
    this.closeDialog()
  }
  changePage(page: number): void {
    this.currentPage = page;
    this.getUnit(page);
  }
  handleEdit(post:any){
    this.isDialogOpen = true
    this.dataUnit = post
    this.isEdit = true
  }
}
