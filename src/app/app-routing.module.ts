import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [    
    {path: 'login', component: LoginComponent},
    {path: 'home/:page/:section', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {   
        path: 'category',
        component: CategoryComponent,
        children: [
            {
                path: ':action',
                component: CategoryComponent,
            }
        ]    
    },
    {
        path: 'products', 
        component: ProductsComponent,
        children: [
            {
                path: 'product/:action',
                component: ProductComponent
            }
        ]
    },
    {path: '', redirectTo: '/login', pathMatch: "full"},
    { path: '**', redirectTo: '/not-found', pathMatch: "full" },
    { path: 'not-found', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {}

export const appRoutingComponents = [
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    CategoryComponent,
    NotFoundComponent
];