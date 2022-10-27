export async function NewsAPICall() {
  // Call external API endpoint to get data
  const res = await fetch(
    `https://ck.directus.app/items/news?fields=*,translations.*,*,category.*,*,seo.*.*`
  );
  const data = await res.json();

  return data.data.reverse(); // Reverse to get the newest posts at the top
}

export async function FrontpageNewsAPICall() {
  // Only fetches the 4 latest news

  // Call external API endpoint to get data
  const res = await fetch(
    `https://ck.directus.app/items/news?fields=*,translations.*,*,category.*,*,seo.*.*`
  );
  const data = await res.json();

  return data.data.splice(-4).reverse(); // Reverse to get the newest posts at the top
}
