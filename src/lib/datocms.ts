import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }: any) {
  const client = new GraphQLClient(
    preview
      ? "https://graphql.datocms.com/preview"
      : "https://graphql.datocms.com",
    {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
        "Content-Type": "application/graphql",
      },
    }
  );

  return client.request(query, variables);
}
