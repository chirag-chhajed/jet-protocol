import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

export default function Profile({ user }) {
  return <div>Hello {user.user_metadata.full_name}</div>;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext | { req: NextApiRequest; res: NextApiResponse; }) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient(ctx);
//   Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();
//   console.log(session?.user.user_metadata.full_name);

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
