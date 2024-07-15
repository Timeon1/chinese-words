import type { APIRoute } from 'astro';

const jsonList = ['./../../content/hsk1.json', "李四", "王五"]

export const GET: APIRoute = async ({ params }) => {
  const type = params.type;
  const url = jsonList[type]
  const data = await fetch(url)
  console.log('data', data.json())
  return new Response(JSON.stringify(data))
};

export function getStaticPaths () {
    return [
        { params: { type: "hsk1"} },
        { params: { type: "hsk2"} },
        { params: { type: "hsk3"} },
    ]
}