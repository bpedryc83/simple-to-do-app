const strContains = (wholeText, searchingString) => {
  const isSearchingStringInside = wholeText.toLowerCase().includes(searchingString.toLowerCase());
  return isSearchingStringInside;
}

export default strContains;