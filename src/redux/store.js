import { configureStore } from "@reduxjs/toolkit";
import  EmployeesSlice  from "../features/Employeesslice";

export const store = configureStore({

    reducer: {
        Employees: EmployeesSlice

    }

});

