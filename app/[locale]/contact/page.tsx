import { notFound } from 'next/navigation';
import { getCopy, isLocale } from '../../../lib/i18n';
export default function Page({params}:{params:{locale:string}}){if(!isLocale(params.locale))notFound();const l=params.locale,c=getCopy(l).contact;return <section className="pageHero"><div className="container"><div className="kicker">{c.kicker}</div><h1>{c.title}</h1><p>{c.lead}</p><div className="actions"><a className="button buttonPrimary" href={`/${l}/founder`}>{c.button}</a></div></div></section>}
