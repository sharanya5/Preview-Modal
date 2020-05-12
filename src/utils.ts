const stripSpanTags = (htmlText: string) => {
  let strippedString = htmlText.replace(/<(span|\/span)[^>]+>/g, '');
  return strippedString;
};

const getNextRowKey = (arrayOfMatch: any[]) => {
  let highestKey = arrayOfMatch.reduce((acc: number, item: { id: string }) => {
    return parseInt(item.id) > acc ? parseInt(item.id) : acc;
  }, 0);
  return (highestKey + 1).toString();
};
export { stripSpanTags, getNextRowKey };
