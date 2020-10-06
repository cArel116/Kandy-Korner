import React from "react"
import { Route } from "react-router-dom"
// import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
// import { EmployeeCard } from "./employee/EmployeeCard"
import { LocationCard } from "./locations/LocationCard"
import { ProductCard } from "./products/ProductCard"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <Route path="/animals">
                <AnimalCard />
            </Route> */}

            {/* Render the animal list when http://localhost:3000/location */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/customer */}
            <Route path="/products">
                <ProductCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/employee */}
            {/* <Route path="/employees">
                <EmployeeCard />
            </Route> */}
        </>
    )
}