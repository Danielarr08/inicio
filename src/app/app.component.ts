import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inicio';

  // Variable que controla la visibilidad del submenú
  isSubMenuVisible = false;

  // Función para mostrar el submenú
  showSubMenu() {
    this.isSubMenuVisible = true;
  }

  // Función para ocultar el submenú
  hideSubMenu() {
    this.isSubMenuVisible = false;
  }
}
