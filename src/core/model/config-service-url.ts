
export class ConfigServiceAddress {
  MARKET_URL: string;
  onRefreshToken?: (idToken?: string) => Promise<string>;
  params?: any;
  constructor() {
    this.MARKET_URL = '';
    this.MARKET_URL = '';
    this.onRefreshToken = async () => '';
  }

  public toString() {
    return JSON.stringify(this);
  }
}
