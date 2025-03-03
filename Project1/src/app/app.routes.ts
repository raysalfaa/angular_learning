import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { NewEmployeeComponent } from './component/new-employee/new-employee.component';
import { StructuralComponent } from './component/directive/structural/structural.component';
import { AttributeComponent } from './component/directive/attribute/attribute.component';
import { IfElseComponent } from './component/controlFlow/if-else/if-else.component';
import { PipeComponent } from './component/pipe/pipe.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'data-bind',
        component: DataBindingComponent
    },
    {
        path: 'structural-directives',
        component: StructuralComponent

    },
    {
        path: 'attribute-directives',
        component:AttributeComponent
    },
    {
        path: 'new-emp',
        component:NewEmployeeComponent
    },
    {
        path: 'if',
        component:IfElseComponent
    },
    {
        path: 'pipe',
        component:PipeComponent
    }
];
