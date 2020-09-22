class Configuration {
    private static _instance: Configuration;

    readonly baseURL: string;
    readonly enableGoogleAnalytics: boolean;

    constructor() {
        this.baseURL =  process.env.BASE_URL || 'https://www.sslife.tech';
        this.enableGoogleAnalytics =  process.env.NODE_ENV === 'production';
    }

    public static get instance(): Configuration {
        return this._instance || (this._instance = new this());
    }
}

export default Configuration.instance;
