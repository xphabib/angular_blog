import { Routes, RouterModule } from "@angular/router";
import { ForgotPasswordComponent} from "./forgot-password.component";

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent
  }
]

export const ForgotPasswordRoutes = RouterModule.forChild(routes);
