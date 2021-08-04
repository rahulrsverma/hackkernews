import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "89c244ae80fc43379df14b02b9ff3f81";

  useEffect(() => {
    axios
      .get(
        ` https://newsapi.org/v2/everything?q=Apple&from=2021-07-23&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};