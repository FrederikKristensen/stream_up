const fetchData = async (url: string) => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
};

export default fetchData;
