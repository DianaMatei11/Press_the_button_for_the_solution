import { Component } from '@angular/core';
import { Probleme } from '../Models/Probleme';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  listaProbleme:Probleme[]=[
    {id:1, name:"problema1"},
    {id:2, name:"problema2"},
    {id:3, name:"problema3"}
  ]

}
