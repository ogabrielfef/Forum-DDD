export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Method to create a slug using title/string
   * Receives a string and normalize it as a slug
   *
   * Example: "An example title" => "an-example-title"
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Regex for remove white spaces in the string
      .replace(/[^\w-]+/g, '') // Regex for remove every that is not words
      .replace(/_/g, '-') // Regex to replace '_' for '-'
      .replace(/--+/g, '-') // Regex to replace '--' for '-'
      .replace(/-$/g, '') // Regex to remove one '-' if there are two at the end of the string

    return new Slug(slugText)
  }
}
