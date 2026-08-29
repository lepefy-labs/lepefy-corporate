const PHOTO_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAABzUlEQVR42u3dwW3DMAwF0FrwpTN2hw6THTpjj+mxPRQIYNEWab5/j6HoWbKSSMz2fD7fZF2GLgAAQAAAEAAABAAAAQBAAACQa7JHXejz4/vYCx9f750Btvmvow93PYaAKSik9wOv0wsgttd6GoxU/dXQwCqoJsB5t2q3QWAEAAAgAAAIAAACAIAAACAAAAgAAAIAgAAAIAAAyEnZ6zb9HrtR91Zd//flSRhGt94Pv04vgPvtRh1tez+JgVWQEbD6Vl07CIwAIwCAAAAgAAAIAAACAIAAAPAi5/2c1K1sihFQFuCMW7Vh1aCRp7961mwaSXrt5XXu+tTZo96AmnHHstX6C5Pwnw+X8xdbBd3vqVNvGXrZU8cUdNZ0lOqps/kbK1MQACn9OWDVjLxwR1vgU6Rk7egkO8tDGOrVjs5TWDSkJcVqR2cr6zrfnkq1o3MW1Z1slVVQzWXo9bv1M9eUnmmbEeCDGAABAEAAABAAAAQAAAEAQAAAEAAABACAf3L9eZXM5zhm2mYElJ2Crj8lmXMQTLaq2CnJbAbz7SlzSjKhQUhLwg5o2B29GECsggAIAAACAIAAACAAAAgAAAIAgAAAIAAACAAAAgCA/OYHCPuga3w509cAAAAASUVORK5CYII=';

function foldLine(line: string) {
  const chunks: string[] = [];
  let remaining = line;
  while (remaining.length > 73) {
    chunks.push(remaining.slice(0, 73));
    remaining = ` ${remaining.slice(73)}`;
  }
  chunks.push(remaining);
  return chunks.join('\r\n');
}

export async function GET() {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Labs;Lepefy;;;',
    'FN:Lepefy Labs',
    'ORG:Lepefy Labs',
    'TEL;TYPE=CELL:+393278551293',
    'EMAIL;TYPE=INTERNET:ciao@lepefy.it',
    'URL:https://www.lepefy.com',
    'URL;TYPE=Facebook:https://www.facebook.com/lepefy',
    `PHOTO;ENCODING=b;TYPE=PNG:${PHOTO_BASE64}`,
    'END:VCARD',
  ];

  const body = `${lines.map(foldLine).join('\r\n')}\r\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Lepefy_Labs.vcf"',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
