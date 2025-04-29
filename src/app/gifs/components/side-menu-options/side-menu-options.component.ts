import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '../../services/gifs.service';


  interface MenuOption {

    icon: string;
    label: string;
    route: string;
    subLabel: string;

  }

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  gifService = inject(GifService)
  
menuOptions: MenuOption[] = [
  {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    route: '/dashboard/trending',
    subLabel: 'Popular Gifs'
  },


  {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Browser',
    route: '/dashboard/search',
    subLabel: 'Browse Gifs'
  }
];


}
