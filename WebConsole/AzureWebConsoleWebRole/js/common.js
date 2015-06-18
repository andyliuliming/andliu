
var isFirefox = false;
var isMSIE = false;
var isChrome = false;

var serviceBaseUri = "http://localhost:63808";

var accessTokenUrl = serviceBaseUri + "/odata/Tokens";
var subscriptionUrl = serviceBaseUri + "/odata/Subscriptions";
var OSName = "Unknown OS";
var OSNameGot = false;
var clientId = "bdc9875c-7994-4812-803e-ea2b216efe60";

var replyUri = serviceBaseUri + "/index.html";