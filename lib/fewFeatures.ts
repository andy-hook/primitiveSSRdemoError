export async function FewFeaturesAPICall() {
  // Call external API endpoint to get data
  const res = await fetch(
    'https://ck.directus.app/items/fewFeatures?fields=*,translations.*,*,seo.*.*'
  );
  const data = await res.json();

  return data.data;
}
