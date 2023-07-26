import { getAccessToken } from "./accessToken";
import { redirectToAuthCodeFlow } from "./auth";
// const redirectUri = "http://localhost:3000/";

const clientId = "73944be242004c0fbf7e72de56570760";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");
if (!code) {
    redirectToAuthCodeFlow(clientId);
}
export const accessToken = await getAccessToken(clientId, code);
