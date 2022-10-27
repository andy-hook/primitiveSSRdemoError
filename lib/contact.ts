export async function ContactAPICall() {
  // Call external API endpoint to get data
  const res = await fetch(
    'https://ck.directus.app/items/contact?fields=*,translations.*,*,seo.*.*'
  );
  const data = await res.json();

  // Get the last item in the array
  return data.data;
}
