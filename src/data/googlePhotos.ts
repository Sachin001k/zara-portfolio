/** Shared Google Photos album for Music Connect session videos */
export const GOOGLE_PHOTOS_ALBUM_ID =
  "AF1QipPV-On6ARUJTh_d_BND0g-BvuFQ5_S5G0UXjx3f7pJ-qKxYNA7dCOVNvCuRM3Hrdg";
export const GOOGLE_PHOTOS_KEY = "dGZlX3I1M3ZoNFVJbVB4OXNwcmZIQXNpSURCMDV3";

export function googlePhotosMediaUrl(photoId: string) {
  return `https://photos.google.com/share/${GOOGLE_PHOTOS_ALBUM_ID}/photo/${photoId}?key=${GOOGLE_PHOTOS_KEY}`;
}
