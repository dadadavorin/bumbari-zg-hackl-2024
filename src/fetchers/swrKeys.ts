const airtableApiUrl = "{{API_URL_GOES_HERE}}"; // Replace with your actual Airtable API URL

export const swrKeys = {
  events: `${airtableApiUrl}?pageSize=40&sort[0][field]=date&sort[0][direction]=asc&filterByFormula=IS_AFTER({date}, TODAY())`,
  eventItem: (id: string) => `${airtableApiUrl}/${id}`,
  eventsWithParams: (params: string) => `${airtableApiUrl}?${params}`,
};
