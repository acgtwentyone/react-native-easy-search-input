const useRecursiveSearch = () => {
  const searchItem = (data: [] | string, query: string) => {
    const find = () => {
      if (
        data === query ||
        (data.toString &&
          query.toString &&
          data
            .toString()
            .toLowerCase()
            .includes(query.toString().toLowerCase()))
      )
        return true //you can modify the matching condition
      return data === Object(data) && Object.values(data).some(find)
    }
    return (Array.isArray(data) ? data : Object.values(data)).filter(find)
  }
  return { searchItem }
}

export default useRecursiveSearch
