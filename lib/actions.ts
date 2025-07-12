"use server";

import { toggleFavorite, toggleWatchLater } from "./data";

export async function toggleFavoriteAction(titleId: string, userEmail: string) {
  await toggleFavorite(titleId, userEmail);
}

export async function toggleWatchLaterAction(
  titleId: string,
  userEmail: string
) {
  await toggleWatchLater(titleId, userEmail);
}
