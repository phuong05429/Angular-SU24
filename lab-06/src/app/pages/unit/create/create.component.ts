import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnitService } from 'src/app/@core/service/api/unit.service';
import { Iunit } from 'src/app/entities/unit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnChanges {
  @Input() title = "";
  @Input() isEdit = false;
  @Input() isOpen = false;
  @Input() data: Iunit = { id: null, name: '', address: '', description: '' };
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() successSubmit: EventEmitter<any> = new EventEmitter();
  formData!: FormGroup;

  constructor(private unitService: UnitService) {}

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      const { name, address, description } = changes.data.currentValue;
      this.formData.patchValue({ name, address, description });
    }
    if (changes.isOpen && !changes.isOpen.currentValue) {
      this.resetForm();
    }
  }

  close() {
    this.isOpen = false;
    this.closeModal.emit();
    this.resetForm();
  }

  add(): void {
    if (this.formData.valid) {
      const unitModel: Iunit = {
        id: this.isEdit && this.data.id ? this.data.id : null,
        name: this.formData.value.name,
        address: this.formData.value.address,
        description: this.formData.value.description,
      };

      if (!this.isEdit) {
        this.unitService.addUnit(unitModel).subscribe({
          next: (res) => {
            console.log('Thêm thành công', res);
            this.isOpen = false;
            this.successSubmit.emit();
            this.resetForm();
          },
          error: (err: any) => {
            console.error('Lỗi khi thêm', err);
          },
        });
      } else {
        if (unitModel.id) {
          this.unitService.editUnit(unitModel).subscribe({
            next: (res) => {
              console.log('Sửa thành công:', res);
              this.isOpen = false;
              this.successSubmit.emit();
              this.resetForm();
            },
            error: (err: any) => {
              console.error('Lỗi khi sửa:', err);
            },
          });
        }
      }
    } else {
      this.formData.markAllAsTouched();
    }
  }

  private resetForm() {
    this.formData.reset({
      name: '',
      address: '',
      description: '',
    });
  }
}
