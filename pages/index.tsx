import { useQuery } from "@apollo/client";
import { GetStaticProps, NextComponentType } from "next";
import { initializeApollo } from "src/apollo";
import { GET_FILRED_DRUGS } from "./graphql/drugs";

const Home: NextComponentType = () => {
  const { data, loading } = useQuery(GET_FILRED_DRUGS, { variables: { keyword: "food" } });

  if (loading) return <span>loading...</span>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
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
