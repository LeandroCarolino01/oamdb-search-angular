import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchQuerySubmit = new EventEmitter<string>();

  searchForm = this.fb.group({
    searchQuery: ''
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit(): void {
    this.searchQuerySubmit.emit(this.searchForm.get('searchQuery').value)
    this.searchForm.reset()
  }

}
