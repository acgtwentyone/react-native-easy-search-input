import * as React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import useRecursiveSearch from './hooks/useRecursiveSearch'

interface SearchInputProps {
  EmptySearchComponent?: React.FC
  isSearching: boolean
  placeholder?: string
  ResultsComponent?: React.FC
  searchContainerStyle?: {}
  searchData: []
  searchInputStyle?: {}
  searchQuery: string
  searchResults: []
  setIsSearching: any
  setSearchData?: any
  setSearchQuery: any
  setSearchResults: any
}

export const EasySearchInput: React.FC<SearchInputProps> = ({
  EmptySearchComponent,
  isSearching,
  placeholder,
  ResultsComponent,
  searchContainerStyle,
  searchData,
  searchInputStyle,
  searchQuery,
  searchResults,
  setIsSearching,
  setSearchQuery,
  setSearchResults,
}) => {
  const { getEachItem } = useRecursiveSearch(searchData, searchQuery)

  const _search = async (input: string) => {
    setIsSearching(true)
    setSearchQuery(input)
    const results = getEachItem()
    return results
  }

  return (
    <View style={[styles.container, { ...searchContainerStyle }]}>
      <TextInput
        style={[styles.input, { ...searchInputStyle }]}
        onChangeText={(query) =>
          _search(query).then((r) => {
            setSearchResults(r)
            setIsSearching(false)
          })
        }
        value={searchQuery}
        placeholder={placeholder ? placeholder : 'Search...'}
      />
      {!isSearching &&
        searchResults.length === 0 &&
        searchQuery !== null &&
        searchQuery !== '' &&
        EmptySearchComponent && <EmptySearchComponent />}
      {!isSearching &&
        searchResults.length > 0 &&
        searchQuery !== null &&
        searchQuery !== '' &&
        ResultsComponent && <ResultsComponent />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
  },
  input: {
    borderRadius: 5,
    borderWidth: 0.8,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%',
  },
})
