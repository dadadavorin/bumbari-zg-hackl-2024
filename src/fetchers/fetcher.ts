export async function fetcher<T>(url: string, init?: RequestInit): Promise<T> {
  const AIRTABLE_BEARER_TOKEN = "{{BEARER_TOKEN_GOES_HERE}}"; // Replace with your actual token

  try {
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_BEARER_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Fetch error: ${error.message}`);
  }
}
