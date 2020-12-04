import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountRegistrationComponent} from './account-registration/account-registration.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: "", redirectTo: "/accountRegistration", pathMatch: "full" },
  { path: "accountRegistration", component: AccountRegistrationComponent },
  { path: "confirmation", component: ConfirmationComponent },
  { path: "*", component: AccountRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
