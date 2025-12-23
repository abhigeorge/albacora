export async function getWorkVideos() {
  const res = await fetch(`${process.env.WP_API_URL}/work_video?per_page=100`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return data
    .filter((item: any) => item.acf?.published)
    .sort((a: any, b: any) => a.acf.order - b.acf.order)
    .map((item: any) => ({
      title: item.title.rendered,
      vimeoId: item.acf.vimeo_id,
      subtitles: item.acf.subtitles?.map((s: any) => s.text) || [],
    }));
}
