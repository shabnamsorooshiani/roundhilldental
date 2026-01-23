export const cookieDuration = 60 * 60 * 24; // 1 day in seconds
export const hasSubmitted = () => document.cookie.includes("form=submitted");
export const setCookie = () => {
  document.cookie = "form=submitted; path=/; max-age=" + cookieDuration;
};
export const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
