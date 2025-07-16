import {
  deleteWatchLater,
  insertWatchLater,
  watchLaterExists,
} from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

/**
 * POST /api/watchlater/:id — toggles watch later
 */
export const POST = auth(
  //@ts-ignore
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;

    //@ts-ignore
    if (!req.auth) {
      return NextResponse.json(
        { error: "Unauthorized - Not logged in" },
        { status: 401 }
      );
    }

    const {
      user: { email }, //@ts-ignore
    } = req.auth;

    const exists = await watchLaterExists(id, email);

    if (exists) {
      await deleteWatchLater(id, email);
      return NextResponse.json({ message: "Removed from watch later" });
    } else {
      await insertWatchLater(id, email);
      return NextResponse.json({ message: "Added to watch later" });
    }
  }
);
