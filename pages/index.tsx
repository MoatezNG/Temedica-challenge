import { GetStaticProps, NextComponentType } from "next";
import { initializeApollo } from "src/apollo";
import React, { useCallback, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import { GET_FILRED_DRUGS } from "./graphql/drugs";
import DrugsList from "./containers/DrugsList";
import { useDebounce } from "./hooks/useDebounce";

const Home: NextComponentType = () => {
  const [keyword, setKeyword] = useState<string>("");
  const onType = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, []);
  const debouncedSearchTerm = useDebounce(keyword, 500);

  return (
    <>
      <Header />
      <SearchBar {...{ setKeyword, keyword, onType }} />
      <DrugsList debouncedSearchTerm={debouncedSearchTerm} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_FILRED_DRUGS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Home;
