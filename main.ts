import { Handler } from "aws-lambda";

export const handler: Handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "main"
      },
      null,
      2
    )
  };
  return new Promise((resolve) => {
    resolve(response);
  });
};
