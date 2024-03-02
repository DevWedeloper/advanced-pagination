import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaginationComponent],
  template: `
    <app-pagination
      [currentPage]="currentPage()"
      [pageSize]="10"
      [total]="150"
      (changePage)="currentPage.set($event)"
    />
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'advanced-pagination';
  protected currentPage = signal<number>(1);
}
