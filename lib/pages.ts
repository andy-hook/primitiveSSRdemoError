export async function PageAPICall(url: string) {
  // Call external API endpoint to get data
  const res = await fetch(
    `https://ck.directus.app/items/${url}?fields=*,translations.*,*,seo.*.*,*,contactPerson.*.*`
  );
  const data = await res.json();

  return data.data;
}
