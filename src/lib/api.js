// lib/api.js
export const API_BASE_URL = "http://127.0.0.1:4000/api";

/**
 * Fetch a setting by its slug
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export async function getSettingBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/settings/${slug}`);
    if (!response.ok) throw new Error(`Error fetching setting: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch setting:", error);
    return null;
  }
}

/**
 * Generic fetch helper for GET requests
 */
export async function getRequest(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`Error fetching ${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error("API GET error:", error);
    return null;
  }
}
