const useRecursiveSearch = (dataSet: [], query: string) => {
  const result: [] = []
  const searchTerm: string = query

  const getEachItem = () => {
    dataSet.forEach((item: object) => {
      searchItem(item)
    })
    let uniqueResults = [...new Set(result)]
    return uniqueResults
  }

  const searchItem = (item: object) => {
    Object.keys(item).forEach((key) => {
      const keyValue: any = item[key]
      if (typeof keyValue === 'object') {
        searchItem(keyValue)
      }
      if (typeof keyValue === 'string') {
        let searchAsRegEx = new RegExp(searchTerm, 'gi')
        if (keyValue.match(searchAsRegEx)) {
          result.push(item)
        }
      }
    })
  }
  return { getEachItem }
}

export default useRecursiveSearch
