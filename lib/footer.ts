export async function FooterAPICall() {
  // Call external API endpoint to get data
  const res = await fetch(`https://ck.directus.app/items/footer`);
  const data = await res.json();

  return data.data;
}
