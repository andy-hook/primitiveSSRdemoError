export async function ContactPersonAPICall(partner: string) {
  // Call external API endpoint to get data
  const res = await fetch(
    `https://ck.directus.app/items/partners?filter[initials][_in]=${partner}&fields=*,translations.*,*,seo.*.*`
  );

  const data = await res.json();

  return data.data;
}
