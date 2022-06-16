# React native easy search input

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/acgtwentyone/react-native-easy-search-input#readme)&nbsp;&nbsp;![GitHub repo size](https://img.shields.io/github/repo-size/acgtwentyone/react-native-easy-search-input)&nbsp;&nbsp;![GitHub issues](https://img.shields.io/github/issues-raw/acgtwentyone/react-native-easy-search-input)&nbsp;&nbsp;![GitHub last commit](https://img.shields.io/github/last-commit/acgtwentyone/react-native-easy-search-input)

React native package to easily search data based on the state data.

## Install

Make sure you have [Node.js](https://nodejs.org/en/) installed, go ahead, and run the following command

```
npm install react-native-easy-search-input
```

## Usage

Import this module:
```
import { EasySearchInput } from 'react-native-easy-search-input';
```

Use as a component
``` javascript
// define your state props
const [isSearching, setIsSearching] = useState(false)
const [searchData, setSearchData] = useState<[]>([{ name: 'Antonio' }])
const [searchQuery, setSearchQuery] = useState<string>('')
const [searchResults, setSearchResults] = useState<[]>([])

// initial selected crumbs, must be one crumb item
const [selectedCrumb, setSelectedCrumb] = useState<Crumb>({
    id: 0,
    title: 'Root',
})

const EmptySearchComponent = () => {
  return <></>
}

const ResultsComponent = () => {
  return <></>
}

// on crumb press event handler
const __onCrumbPress = (crumb: Crumb) => {
    console.log(crumb.id)
    // console.log('Selected', `Crumb ${crumb.title} selected`)
}

// call for easy search input component call
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
```

We encourage you to take a look at the example folder.

## API
Here is the customization properties you may use in order to customize your breadcrumb. There is brief description of prop, type, option, and description 

| prop                        | type          | description                                                                 |
| --------------------------- |:-------------:|:----------------------------------------------------------------------------|
| isSearching                 | boolean       | if is searching or not. default to false                                    |
| searchData                  | array         | data to search through                                                      |
| searchQuery                 | string        | hold the search query                                                       |
| searchResults               | array         | an array containg the results of search                                     |
| setIsSearching              | function      | updates de the value of isSearching                                         |
| setSearchQuery              | function      | updates de the value of searchQuery                                         |
| setSearchResults            | function      | updates de the value of searchResults                                       |
| EmptySearchComponent        | React.FC      | the react component to display when there is no results of search           |
| ResultsComponent            | React.FC      | the search results component to display                                     |
| placeholder                 | string        | placeholder to show in input element                                        |
| setSearchData               | function      | updates de the value of searchData                                          |
| searchContainerStyle        | object        | style to be applied to the search container                                 |
| searchInputStyle            | object        | style to be applied to the input element                                    |

## Community
This package is open source. Please read the [code-of-conduting](https://github.com/acgtwentyone/react-native-easy-search-input/blob/main/CODE_OF_CONDUCT.md)

## Contributing

See the [contributing file](https://github.com/acgtwentyone/react-native-easy-search-input/blob/main/CONTRIBUTING.md)!

Small note: If editing the README, please conform to the [standard-readme](https://github.com/acgtwentyone/react-native-easy-search-input#readme) specification.

## Maintainers

[@acgtwentyone](https://github.com/acgtwentyone)

## License

[MIT](https://github.com/acgtwentyone/react-native-easy-search-input/blob/main/LICENSE) © 2021 Antonio Goncalves
