import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iunit } from 'src/app/entities/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  private apiUrl = 'https://knowledgehub.demopolyct.online/api/unit';

  constructor(private http: HttpClient) {}

  getUnits(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }

  addUnit(unit: Iunit): Observable<any> {
    return this.http.post<any>(this.apiUrl, unit);
  }

  editUnit(unit: Iunit): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${unit.id}`, unit);
  }

  deleteUnit(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
