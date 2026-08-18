"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { catalog, price } from "../lib/catalog";

export default function FavoritesPage() {
  const [ids, setIds] = useState<number[]>([]);
  useEffect(() => { try { setIds(JSON.parse(window.localStorage.getItem("nexa-favorites") || "[]")); } catch { setIds([]); } }, []);
  const products = catalog.filter((product) => ids.includes(product.id));
  function remove(id:number) { const next = ids.filter((item) => item !== id); setIds(next); window.localStorage.setItem("nexa-favorites", JSON.stringify(next)); }
  return <main className="routePage favoritesPage"><div className="routeHeader"><a href="/">← Continuer mes achats</a><a className="wordmark" href="/">nexa<span>•</span></a><span/></div><section className="favoritesContent"><p className="kicker">Votre sélection</p><h1>Mes favoris <small>({products.length})</small></h1>{products.length ? <div className="favoritesGrid">{products.map((product) => <article key={product.id}><a href={`/produit/${product.id}`}><img src={product.image} alt={product.name}/></a><button onClick={() => remove(product.id)} aria-label={`Retirer ${product.name} des favoris`}><Heart size={19} fill="currentColor"/></button><small>{product.brand}</small><h2><a href={`/produit/${product.id}`}>{product.name}</a></h2><strong>{price(product.price)}</strong></article>)}</div> : <div className="favoritesEmpty"><Heart size={31} strokeWidth={1.4}/><h2>Votre liste est encore vide.</h2><p>Gardez ici les produits qui vous donnent envie.</p><a className="darkButton" href="/#produits">Découvrir les produits <span>→</span></a></div>}</section></main>;
}
