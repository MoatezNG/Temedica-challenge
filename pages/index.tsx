import { useQuery, gql } from "@apollo/client";
import { GetStaticProps, NextComponentType } from "next";
import { initializeApollo } from "src/apollo";

const MyQuery = gql`
  query MyQuery {
    name
  }
`;

const Home: NextComponentType = () => {
  const { data, loading } = useQuery(MyQuery);

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
    query: MyQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Home;
