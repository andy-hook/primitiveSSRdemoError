export async function BannerAPICall() {
  // Call external API endpoint to get data
  const res = await fetch('https://ck.directus.app/items/featuredNews/');
  const data = await res.json();

  const bannerData = data.data;

  // Get the last item in the array
  return bannerData.pop();
}
