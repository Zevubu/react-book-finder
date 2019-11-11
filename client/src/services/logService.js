import * as Sentry from "@sentry/browser";

function init(){
    Sentry.init({
        dsn: "https://845fbdf045a3460e935aa359775c634c@sentry.io/1814418"
    });
}

function log(error){
    Sentry.captureException(error);
    console.log(error);
}

export default{
    init,
    log
};