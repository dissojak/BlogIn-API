const baseUrl = process.env.API_BASE_URL || "http://localhost:4400";

const protectedOp = (summary, description) => ({
  summary,
  description,
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "Success" },
    201: { description: "Success" },
    400: { description: "Bad request" },
    401: { description: "Unauthorized" },
    404: { description: "Not found" },
  },
});

const publicOp = (summary, description) => ({
  summary,
  description,
  security: [],
  responses: {
    200: { description: "Success" },
    201: { description: "Success" },
    400: { description: "Bad request" },
    404: { description: "Not found" },
    409: { description: "Conflict" },
  },
});

const paths = {
  "/": {
    get: publicOp("Health check", "Verifies the server is running."),
  },

  "/user/signUp": {
    post: publicOp("Create a user account", "Registers a new user and returns a JWT."),
  },
  "/user/login": {
    post: publicOp("Authenticate a user", "Validates credentials and returns a JWT."),
  },
  "/user": {
    get: protectedOp("Get current user", "Returns the authenticated user profile."),
  },
  "/user/popular": {
    get: protectedOp("Get popular users", "Returns the top suggested users."),
  },
  "/user/orderUsersByPoints": {
    get: protectedOp("Order users by points", "Returns users sorted by total points."),
  },
  "/user/changeIcon": {
    post: protectedOp("Change user icon", "Updates the authenticated user's avatar icon."),
  },
  "/user/searchUser": {
    post: publicOp("Search users", "Searches users by name."),
  },
  "/user/searchFreind": {
    post: protectedOp("Search friends", "Searches followed users by name."),
  },
  "/user/userById": {
    post: publicOp("Get user by id", "Fetches a user document by its id."),
  },
  "/user/upgrade": {
    post: protectedOp("Update user profile", "Updates name, profession, age, bio, and interests."),
  },
  "/user/followUser": {
    post: protectedOp("Follow user", "Adds the authenticated user to the target user's followers."),
  },
  "/user/unfollowUser": {
    post: protectedOp("Unfollow user", "Removes the authenticated user from the target user's followers."),
  },
  "/user/followings": {
    post: protectedOp("Get followings", "Returns a list of followed users."),
  },
  "/user/setUserHistory": {
    post: protectedOp("Update user history", "Adds or removes an article id in user history."),
  },

  "/article/save": {
    post: protectedOp("Create an article draft", "Creates a new article draft."),
  },
  "/article": {
    post: protectedOp("Get article by id", "Fetches a single article by id."),
  },
  "/article/trendingTags": {
    get: protectedOp("Get trending tags", "Returns the most used tags."),
  },
  "/article/articleWantToRead": {
    get: protectedOp("Get recommended articles", "Returns article recommendations based on user interests."),
  },
  "/article/update": {
    post: protectedOp("Update article", "Updates an article title and sections."),
  },
  "/article/finished": {
    get: protectedOp("Get published articles", "Returns the authenticated user's published articles."),
  },
  "/article/workingOn": {
    get: protectedOp("Get drafts", "Returns the authenticated user's unpublished articles."),
  },
  "/article/collaboration": {
    get: protectedOp("Get collaborations", "Returns articles where the user is a collaborator."),
  },
  "/article/collaborationForStats": {
    get: protectedOp("Get collaboration stats articles", "Returns published collaboration articles."),
  },
  "/article/test": {
    get: publicOp("Test articles endpoint", "Returns all published articles."),
  },
  "/article/all": {
    get: protectedOp("Get all articles", "Returns published articles not authored by the current user."),
  },
  "/article/publishArticle": {
    post: protectedOp("Publish article", "Marks an article as published."),
  },
  "/article/searchArticle": {
    post: protectedOp("Search articles", "Searches published articles by title."),
  },
  "/article/like": {
    post: protectedOp("Like or unlike article", "Toggles a like on an article."),
  },
  "/article/ratingArticle": {
    post: protectedOp("Rate article", "Adds or updates the authenticated user's rating."),
  },
  "/article/otherFinished": {
    post: protectedOp("Get another user's articles", "Returns finished articles for another profile."),
  },
  "/article/searchInOtherProfile": {
    post: protectedOp("Search articles in profile", "Searches articles in another user's profile."),
  },
  "/article/searchByTagInOtherProfile": {
    post: protectedOp("Search articles by tag", "Searches profile articles by tag list."),
  },
  "/article/addCollaborator": {
    post: protectedOp("Add collaborator", "Adds the authenticated user as a collaborator."),
  },
  "/article/getCollaborators": {
    post: protectedOp("Get collaborators", "Returns collaborator user details."),
  },
  "/article/readLater": {
    post: protectedOp("Toggle read later", "Adds or removes an article from read later."),
  },
  "/article/setReadtime": {
    post: protectedOp("Set read time", "Increments article read time."),
  },
  "/article/setArticleViews": {
    post: protectedOp("Set article views", "Tracks article views and points."),
  },
  "/article/getReadLaterArticles": {
    post: protectedOp("Get read later articles", "Returns articles saved for later."),
  },
  "/article/delete": {
    post: protectedOp("Delete article", "Deletes an article by id."),
  },
  "/article/switchCommentStat": {
    post: protectedOp("Toggle comments", "Enables or disables article comments."),
  },
  "/article/attachUser": {
    post: protectedOp("Attach user", "Adds or removes the authenticated user from attached users."),
  },
  "/article/schedule": {
    post: protectedOp("Schedule article", "Schedules publication of an article."),
  },
  "/article/reschedule": {
    post: protectedOp("Reschedule article", "Updates a scheduled publication."),
  },
  "/article/cancelSchedule": {
    post: protectedOp("Cancel article schedule", "Cancels a scheduled publication."),
  },
  "/article/rankingpoints": {
    get: protectedOp("Get ranking points", "Returns the points leaderboard."),
  },

  "/notes/save": {
    post: protectedOp("Save note", "Creates a note for an article."),
  },
  "/notes/saveLink": {
    post: protectedOp("Save link", "Creates a link for an article."),
  },
  "/notes/get": {
    post: protectedOp("Get notes", "Returns notes for an article."),
  },
  "/notes/getLinks": {
    post: protectedOp("Get links", "Returns links for an article."),
  },
  "/notes/delete": {
    post: protectedOp("Delete note", "Deletes a note by id."),
  },
  "/notes/deleteLink": {
    post: protectedOp("Delete link", "Deletes a link by id."),
  },

  "/notification/send": {
    post: protectedOp("Send notification", "Creates notifications and optionally draft articles."),
  },
  "/notification": {
    get: protectedOp("Get notifications", "Returns notifications for the authenticated user."),
  },
  "/notification/changeState": {
    get: protectedOp("Mark notifications read", "Marks all notifications as read."),
  },
  "/notification/changeAcceptedState": {
    post: protectedOp("Accept notification", "Marks a notification as accepted."),
  },
  "/notification/deleteNotification": {
    get: protectedOp("Delete notifications", "Deletes all notifications for the authenticated user."),
  },
  "/notification/sendShareNotification": {
    post: protectedOp("Send share notification", "Sends share notifications and awards points."),
  },

  "/comment/save": {
    post: protectedOp("Save comment", "Creates a comment on an article."),
  },
  "/comment/get": {
    post: protectedOp("Get comments", "Returns comments for an article."),
  },
  "/comment/like": {
    post: protectedOp("Like comment", "Toggles a like on a comment."),
  },

  "/report/save": {
    post: protectedOp("Save report", "Creates an article report."),
  },
  "/report/get": {
    get: protectedOp("Get reported articles", "Returns articles that have reports."),
  },
  "/report/getReports": {
    post: protectedOp("Get reports", "Returns reports for an article."),
  },
};

module.exports = {
  openapi: "3.0.0",
  info: {
    title: "BlogIn API",
    version: "1.0.0",
    description: "Swagger documentation for the BlogIn backend API",
  },
  servers: [
    {
      url: baseUrl,
      description: "Local development server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths,
};