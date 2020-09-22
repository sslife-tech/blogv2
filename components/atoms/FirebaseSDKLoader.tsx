import React from "react";
import config from "~/Configuration";

const FirebaseSDKLoader: React.FunctionComponent = () => {
    if (config.enableGoogleAnalytics) {
        return (
            <>
                <script src="/__/firebase/7.21.0/firebase-app.js"/>
                <script src="/__/firebase/7.21.0/firebase-analytics.js"/>
                <script src="/__/firebase/init.js"/>
            </>
        );
    }
    return (<div/>);
};

export {FirebaseSDKLoader};
