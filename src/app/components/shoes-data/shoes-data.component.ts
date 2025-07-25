import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Shoe } from '../../models/user.protocol';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-shoes-data',
    imports: [CommonModule, RouterModule],
    templateUrl: './shoes-data.component.html',
    styleUrl: './shoes-data.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoesDataComponent{

  shoes = input<Shoe[]>()

  
}
