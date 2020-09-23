import React from "react";
import {configuration} from "~/Configuration";

const FirebaseSDKLoader: React.FunctionComponent = () => {
    if (configuration.enableGoogleAnalytics) {
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
