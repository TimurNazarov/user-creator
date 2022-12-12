export function measureProgress(inputFields) {
  const fields = Object.values(inputFields)
  const filledAmount = fields.filter(field => field.value).length // truthy
  return Math.round(100 / fields.length * filledAmount)
}

export function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("en-GB")
}