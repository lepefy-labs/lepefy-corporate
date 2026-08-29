import { permanentRedirect } from 'next/navigation';

export default function LegacyContactRedirect() {
  permanentRedirect('/fr/card');
}
