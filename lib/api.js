export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://197g8eae3j.execute-api.eu-west-1.amazonaws.com"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}
