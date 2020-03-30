import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  getFormSearch;

  @Output() search = new EventEmitter<string>();

  @Output() getAddress = new EventEmitter<string>();

  @Output() getBeRoom = new EventEmitter<string>();

  @Output() getBathRoom = new EventEmitter<string>();

  @Output() getPrice = new EventEmitter<string>();


  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getFormSearch = this.fb.group({
      address: ["", [Validators.required]],
      bed_room_num: ["", [Validators.required]],
      bath_room_num: ["", [Validators.required]],
      price: ["", [Validators.required]],
    });
  }

  getKeyword(event) {
    let value = event.target.value;    
    this.search.emit(value);
  }

  getKeywordBy(event) {
    let value = event.target.value;    
    this.getAddress.emit(value);
  }

  onSubmit(data) {
    this.getAddress.emit(data.address);
    this.getBeRoom.emit(data.bed_room_num);
    this.getBathRoom.emit(data.bath_room_num);
    this.getPrice.emit(data.price);
    location.reload();
  }

}
