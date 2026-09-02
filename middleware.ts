import { NextResponse, type NextRequest } from "next/server";

// ==========================================================================
// Routage par sous-domaine.
// --------------------------------------------------------------------------
// L'espace client vit sur `moncompte.inspirepilates.fr`, déployé séparément
// (Phase 2, autre dev). Tant qu'aucune application n'y est branchée, on y
// sert une page 404 de marque (public/moncompte.html) au lieu de la home du
// site vitrine. Sur tous les autres hôtes, ce middleware est un simple
// passe-plat (aucun impact sur le site en production).
// ==========================================================================

const ACCOUNT_HOST = "moncompte.inspirepilates.fr";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();

  if (host === ACCOUNT_HOST || host.startsWith("moncompte.")) {
    const url = request.nextUrl.clone();
    url.pathname = "/moncompte.html";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // On exclut les assets statiques pour ne pas alourdir les requêtes du site.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|moncompte.html).*)",
  ],
};
