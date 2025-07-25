import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoesPresentationComponent } from '../../components/shoes-presentation/shoes-presentation.component';
import { ShoesComponent } from '../../components/shoes/shoes.component';
import { NotDirective } from '../../directives/not/not.directive';
import { ForDirective } from '../../directives/for/for.directive';
import { Observable, Subject,interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [CommonModule,ShoesPresentationComponent, ShoesComponent,NotDirective,ForDirective],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    protected teste = false;
    protected sub = new Subject<any>();

    protected lista = [
        {
            nome:"luiz"
        },
        {
            nome:"ana"
        },
        {
            nome:"rebecca"
        },
        {
            nome:"beatriz"
        },
    ]
}
