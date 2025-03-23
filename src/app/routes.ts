import { Component } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { DetailsComponent } from "./components/details/details.component";
import { Routes } from "@angular/router";

const routeConfig: Routes = [
    {
            path: '',
            component: HomeComponent,
            title: 'Home page',
    },
    // {
    //     path: 'details/:id',
    //     component: DetailsComponent,
    //     title: "Home details"
    // }
    {
        path: 'details',
        component: DetailsComponent,
        title: " Details component"
    }
]


export default routeConfig;
