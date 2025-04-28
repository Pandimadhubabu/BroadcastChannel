export async function fetchPosts(channel) {
  const res = await fetch(`https://api.telegram.org/feed/${channel}`);
  const data = await res.json(); // Adjust depending on actual structure
  return data.posts || [];
}
