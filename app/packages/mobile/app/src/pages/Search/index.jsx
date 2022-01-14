import React from "react"
import { Route } from "react-router-dom"

import SearchComponent from "../../components/Search"
import DetailsComponent from "../../components/Search/Details"
import CatalogPriceComponent from "../../components/Search/Details/PriceCatalog"

const SearchPage = () => {
  return (
    <>
      <Route
        exact
        path="/search-catalog-price"
        component={CatalogPriceComponent}
      />

      <Route exact path="/search-details" component={DetailsComponent} />
      <Route exact path="/search" component={SearchComponent} />
    </>
  )
}

export default SearchPage
