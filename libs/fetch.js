import fetch from 'isomorphic-unfetch'

export default async function t (...args) {

  const res = await fetch(...args)
  //return res.json()
  return res.json()
}