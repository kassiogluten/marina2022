import { GraphQLClient } from "graphql-request";

export const graphCMSClient = () =>
  new GraphQLClient(
    "https://api-sa-east-1.graphcms.com/v2/cl02msquwbhnv01yscc5ub2jr/master"
  );
