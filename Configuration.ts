interface Configuration {
    readonly baseURL: string;
    readonly enableGoogleAnalytics: boolean;
}

const configuration: Configuration = {
    baseURL: process.env.BASE_URL || 'https://www.sslife.tech',
    enableGoogleAnalytics: process.env.NODE_ENV === 'production',
};

export {
    configuration,
};
