import { deleteFavorite, favoriteExists, insertFavorite } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

/**
 * POST /api/favorites/:id — toggles favorite
 */
export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized - Not logged in" },
      { status: 401 }
    );
  }

  const email = session.user.email;
  const exists = await favoriteExists(id, email);

  if (exists) {
    await deleteFavorite(id, email);
    return NextResponse.json({ message: "Removed from favorites" });
  } else {
    await insertFavorite(id, email);
    return NextResponse.json({ message: "Added to favorites" });
  }
};
