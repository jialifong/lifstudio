export const config = {
  runtime: 'edge'
};

export default function () {
  return new Response(null, {
    status: 204
  });
}
