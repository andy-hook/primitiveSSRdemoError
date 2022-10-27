export async function TestimonialsAPICall() {
  // Call external API endpoint to get data
  const res = await fetch('https://ck.directus.app/items/testimonials/');
  const data = await res.json();

  return data.data;
}
