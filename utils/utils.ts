class Utils {
  /**
   * Generates a random user ID consisting of 14 characters.
   *
   * @return {string} The randomly generated user ID.
   */
  public GenUserID(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}

export default new Utils();
