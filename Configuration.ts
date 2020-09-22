class Configuration {
    private static _instance: Configuration;

    readonly baseURL: string;

    constructor() {
        this.baseURL =  process.env.BASE_URL || 'https://www.sslife.tech';
    }

    public static get instance(): Configuration {
        return this._instance || (this._instance = new this());
    }
}

export default Configuration.instance;
