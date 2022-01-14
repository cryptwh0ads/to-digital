import React from "react"
import { Route } from "react-router-dom"

import SearchComponent from "../../components/Search"
import DetailsComponent from "../../components/Search/Details"

const SearchPage = () => {
  return (
    <>
      <Route exact path="/search-details" component={DetailsComponent} />
      <Route exact path="/search" component={SearchComponent} />
    </>
  )
}

export default SearchPage
