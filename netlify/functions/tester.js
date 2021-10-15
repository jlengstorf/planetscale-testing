export async function handler(event) {
  const { name = 'friend' } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: `Hello, ${name}.`,
  };
}
