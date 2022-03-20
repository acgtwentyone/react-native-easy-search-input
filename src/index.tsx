import * as React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

interface SearchInputProps {
  EmptySearchComponent: React.FC
  ResultsComponent: React.FC
  searchData: []
  setSearchData: any
  searchResults: []
  setSearchResults: any
  isSearching: boolean
  setIsSearching: any
  searchQuery: string
  placeholder: string
  searchContainerStyle: {}
  searchInputStyle: {}
  onChangeSearchQuery: any
}

export const EasySearchInput: React.FC<SearchInputProps> = ({
  searchData,
  setSearchData,
  isSearching,
  searchResults,
  setSearchResults,
  setIsSearching,
  searchQuery,
  placeholder,
  EmptySearchComponent,
  ResultsComponent,
  onChangeSearchQuery,
  searchContainerStyle,
  searchInputStyle,
}) => {
  const _search = async (input: string) => {
    setIsSearching(true)
    onChangeSearchQuery(input)
    const _copyOfData = searchData
    let results = _copyOfData.filter((data) => {
      return data
    })
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
        placeholder={placeholder ? placeholder : 'search...'}
      />
      {!isSearching &&
        searchResults.length === 0 &&
        searchQuery !== null &&
        searchQuery !== '' && <EmptySearchComponent />}
      {!isSearching &&
        searchResults.length > 0 &&
        searchQuery !== null &&
        searchQuery !== '' && <ResultsComponent />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  input: {
    padding: 16,
    borderColor: '#893398',
    borderWidth: 1,
    borderRadius: 0,
  },
})
