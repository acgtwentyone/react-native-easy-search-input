import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { EasySearchInput } from 'react-native-easy-search-input'

const App = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [searchData, setSearchData] = useState<[]>([{ name: 'Antonio' }])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<[]>([])

  useEffect(() => {
    console.log(searchResults)
    console.log(searchQuery)
  })

  const EmptySearchComponent = () => {
    return <></>
  }

  const ResultsComponent = () => {
    return <></>
  }

  return (
    <EasySearchInput
      isSearching={isSearching}
      searchData={searchData}
      searchQuery={searchQuery}
      searchResults={searchResults}
      setIsSearching={setIsSearching}
      setSearchQuery={setSearchQuery}
      setSearchResults={setSearchResults}
      EmptySearchComponent={EmptySearchComponent}
      ResultsComponent={ResultsComponent}
      // placeholder='search placeholder'
      setSearchData={setSearchData}
      searchContainerStyle={styles.searchContainerStyle}
      searchInputStyle={styles.searchInputStyle}
    />
  )
}

const styles = StyleSheet.create({
  searchContainerStyle: {},
  searchInputStyle: {},
})

export default App
