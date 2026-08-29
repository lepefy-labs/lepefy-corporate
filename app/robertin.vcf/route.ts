export async function GET(request: Request) {
  return Response.redirect(new URL('/card.vcf', request.url), 308);
}
