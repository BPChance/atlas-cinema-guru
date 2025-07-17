import { deleteFavorite, favoriteExists, insertFavorite } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

/**
 * POST /api/favorites/:id — toggles favorite
 */
export const POST = auth(
  //@ts-ignore
  async (
    req: NextRequest & { auth?: any },
    { params }: { params: { id: string } }
  ) => {
    const { id } = params;

    //@ts-ignore
    if (!req.auth) {
      return NextResponse.json(
        { error: "Unauthorized - Not logged in" },
        { status: 401 }
      );
    }
    console.log("AUTH OBJECT:", req.auth);

    const {
      user: { email }, //@ts-ignore
    } = req.auth;

    const exists = await favoriteExists(id, email);

    if (exists) {
      await deleteFavorite(id, email);
      return NextResponse.json({ message: "Removed from favorites" });
    } else {
      await insertFavorite(id, email);
      return NextResponse.json({ message: "Added to favorites" });
    }
  }
);
