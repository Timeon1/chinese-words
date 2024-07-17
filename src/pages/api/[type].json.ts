import type { APIRoute } from 'astro';

const jsonList = {
  'hsk1': './../../content/hsk1.json',
  'hsk2': './../../content/hsk1.json',
  'hsk3': './../../content/hsk1.json'
}

export const GET: APIRoute = async ({}) => {
  // const type = params.type;
  // const url = jsonList[type]
  const data = await fetch('./../../content/hsk1.json')
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