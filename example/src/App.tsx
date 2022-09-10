import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { EasySearchInput } from 'react-native-easy-search-input'

import dummyUsers from '../app/dummy/users.json'

const App = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [searchData, setSearchData] = useState<[]>(dummyUsers)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<[]>([])

  useEffect(() => {
    console.log(searchResults)
    // console.log(searchQuery)
  })

  const EmptySearchComponent = () => {
    return (
      <>
        <Text>No results could be found</Text>
      </>
    )
  }

  const ResultsComponent = () => {
    return (
      <>
        {searchResults.length > 0 &&
          searchResults.map((item, i) => {
            console.log(item)
            return (
              <Text key={i}>
                {`${item.id} - ${item.first_name}`}
                {/* {undefined !== contact && undefined !== contact.email ? contact.email : 'no email'} */}
              </Text>
            )
          })}
      </>
    )
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
