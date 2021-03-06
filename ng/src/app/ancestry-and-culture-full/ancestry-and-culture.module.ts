import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

import { AncestryAndCultureComponent } from './ancestry-and-culture.component';
import { AncestryAndCultureService } from './ancestry-and-culture.service';
import { AncestryComponent } from './ancestry/ancestry.component';
import { CultureComponent } from './culture/culture.component';
import { AbilityComponent } from './ability/ability.component';
import { AncestryStepComponent } from './ancestry-step/ancestry-step.component';
import { CultureStepComponent } from './culture-step/culture-step.component';
import { GenerateRaceStepComponent } from './generate-race-step/generate-race-step.component';
import { TraitDisplayComponent } from './trait-display/trait-display.component';
import { AncestryAndCultureRoutingModule } from './ancestry-and-culture-routing.module';

@NgModule({
  declarations: [
    AncestryAndCultureComponent,
    AncestryComponent,
    CultureComponent,
    AbilityComponent,
    AncestryStepComponent,
    CultureStepComponent,
    GenerateRaceStepComponent,
    TraitDisplayComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AncestryAndCultureRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [AncestryAndCultureService]
})
export class AncestryAndCultureModule {}
