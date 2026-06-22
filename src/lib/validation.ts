const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateSlug(value: string): string {
  if (value.length === 0 || value.length > 96 || !SLUG_PATTERN.test(value)) {
    throw new Error("Invalid content URL");
  }

  return value;
}
