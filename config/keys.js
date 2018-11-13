
const MLAB_USER = process.env.MLAB_USER;
const MLAB_PASSWORD = process.env.MLAB_PASSWORD;
const STORY_TRACKER_googleClientID = process.env.STORY_TRACKER_googleClientID;
const STORY_TRACKER_googleClientSecret = process.env.STORY_TRACKER_googleClientSecret;
const STORY_TRACKER_DB = process.env.STORY_TRACKER_DB;

module.exports{
  mongoURI: `mongodb://${MLAB_USER}:${MLAB_PASSWORD}@ds161653.mlab.com:61653/${STORY_TRACKER_DB}`,
  googleClientID: STORY_TRACKER_googleClientID,
  googleClientSecret: STORY_TRACKER_googleClientSecret
}
