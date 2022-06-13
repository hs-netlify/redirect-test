export async function middleware(req) {
  // Add this line
  req.geo.country = req.headers.get("x-country");

  // The rest of your middleware goes here
}
