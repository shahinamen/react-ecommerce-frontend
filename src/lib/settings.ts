export async function getAllSettings() {
  try {
    const res = await fetch("http://127.0.0.1:4000/api/settings");
    if (!res.ok) throw new Error("Failed to fetch settings");
    const data = await res.json();

    // Convert array to object { slug: value }
    return data.reduce((acc, setting) => {
      acc[setting.slug] = setting.values;
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching settings:", error);
    return {};
  }
}
