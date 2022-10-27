export async function PartnersAPICall() {
  // Call external API endpoint to get data
  const res = await fetch(
    `https://ck.directus.app/items/partners?fields=*,translations.*,*,seo.*.*`
  );
  const data = await res.json();
  const partnerData = data.data;

  return partnerData.sort((a: any, b: any) => (a.uid > b.uid ? 1 : -1));
}
