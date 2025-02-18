const appEngineAppId = process.env.GAE_APPLICATION?.split("~")[1];
export const appEngineUrl = `https://${appEngineAppId}.appspot.com`;