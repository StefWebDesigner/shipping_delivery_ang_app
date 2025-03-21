import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


  template: `
    <router-outlet>
      <main>
        <a [routerLink]="['/']">
          <header class="brand-name">
            <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>
        </a>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>
    </router-outlet>
  
  `




})
export class AppComponent {
  title = 'shipping_delivery_ang_app';
}
