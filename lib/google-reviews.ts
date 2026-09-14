// ==========================================================================
// Avis Google en direct — API Google Places (New).
// --------------------------------------------------------------------------
// Récupération CÔTÉ SERVEUR uniquement. La clé API reste secrète (variable
// d'environnement, jamais exposée au navigateur). L'API officielle renvoie la
// note globale, le nombre d'avis et jusqu'à 5 avis (limite de Google).
//
// Config requise (env) :
//   GOOGLE_PLACES_API_KEY   → clé API Google Cloud (API "Places API (New)")
//   GOOGLE_PLACES_PLACE_ID  → Place ID du studio
//
// Sans ces variables (ou en cas d'erreur), la fonction renvoie null et
// l'interface bascule proprement sur les avis de repli.
// ==========================================================================

export type GoogleReview = {
  id: string;
  author: string;
  rating: number;
  quote: string;
  relativeTime?: string;
};

export type GoogleReviewsData = {
  rating: number;
  total: number;
  reviews: GoogleReview[];
};

type PlacesApiReview = {
  name?: string;
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string };
};

type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesApiReview[];
};

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=fr`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        // Cache serveur : on rafraîchit au plus une fois par jour
        // (largement suffisant pour des avis, et on reste dans le quota gratuit).
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return null;

    const data = (await res.json()) as PlacesApiResponse;
    if (typeof data.rating !== "number") return null;

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r, i) => ({
        id: r.name ?? `google-review-${i}`,
        author: r.authorAttribution?.displayName ?? "Client Google",
        rating: typeof r.rating === "number" ? r.rating : 5,
        quote: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        relativeTime: r.relativePublishTimeDescription,
      }))
      .filter((r) => r.quote.length > 0);

    return {
      rating: data.rating,
      total: data.userRatingCount ?? reviews.length,
      reviews,
    };
  } catch {
    return null;
  }
}
