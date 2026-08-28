export async function GET(request: Request) {
  return Response.redirect(new URL('/founder.vcf', request.url), 308);
}
