import { getPost } from "@/api/posts";
import { usePost } from "@/hooks/api/posts";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

const PostPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, error } = usePost(id as string);
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as Params;

  const queryClient = new QueryClient();

  // prefetch data on the server
  await queryClient.fetchQuery(["post", id], () => getPost(id));

  return {
    props: {
      // dehydrate query cache
      dehydratedState: dehydrate(queryClient),
    },
  };
};
