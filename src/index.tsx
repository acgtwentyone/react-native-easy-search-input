import * as React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface SearchInputProps {
  EmptySearchComponent?: React.FC
  ResultsComponent?: React.FC
  searchData: []
  setSearchData?: any
  searchResults: []
  setSearchResults: any
  isSearching: boolean
  setIsSearching: any
  searchQuery: string
  setSearchQuery: any
  placeholder?: string
  searchContainerStyle?: {}
  searchInputStyle?: {}
}

export const EasySearchInput: React.FC<SearchInputProps> = ({
  searchData,
  isSearching,
  searchResults,
  setSearchResults,
  setIsSearching,
  searchQuery,
  placeholder,
  EmptySearchComponent,
  ResultsComponent,
  setSearchQuery,
  searchContainerStyle,
  searchInputStyle,
}) => {
  const _search = async (input: string) => {
    setIsSearching(true)
    setSearchQuery(input)
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
        placeholder={placeholder ? placeholder : 'Search...'}
      />
      <Text>{searchQuery}</Text>
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
    width: '100%',
    padding: 16,
  },
  input: {
    width: '100%',
    marginVertical: 8,
    borderWidth: 0.8,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
})
