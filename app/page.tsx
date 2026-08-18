"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Cable, Gamepad2, Headphones, Heart, House, Smartphone, Watch } from "lucide-react";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  color: string;
  badge?: string;
  rating: number;
  category: string;
};

const products: Product[] = [
  { id: 1, name: "Casque Halo Pro", brand: "SONOSPHERE", price: 289, oldPrice: 359, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85", color: "#d6c2ff", badge: "-20%", rating: 4.9, category: "Audio" },
  { id: 2, name: "Pulse Watch S", brand: "NEXA LAB", price: 219, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=85", color: "#f6c3a8", badge: "Nouveau", rating: 4.8, category: "Wearables" },
  { id: 3, name: "Orbit Mini Speaker", brand: "AER", price: 149, oldPrice: 179, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85", color: "#8bc5ff", badge: "Best-seller", rating: 4.7, category: "Audio" },
  { id: 4, name: "Rise 3-in-1 Charge", brand: "FORM", price: 119, image: "https://images.unsplash.com/photo-1583863788434-e58a36330c3a?auto=format&fit=crop&w=900&q=85", color: "#b5ead7", rating: 4.6, category: "Accessoires" },
  { id: 5, name: "Clavier Arc 75", brand: "KEYS", price: 199, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85", color: "#ffccad", badge: "Nouveau", rating: 4.8, category: "Gaming" },
  { id: 6, name: "Caméra Nest View", brand: "HOMEWAY", price: 179, oldPrice: 209, image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85", color: "#c5d4ff", rating: 4.5, category: "Maison" },
];

const categories = [
  { name: "Audio", Icon: Headphones, color: "#ded4ff" },
  { name: "Mobile", Icon: Smartphone, color: "#b9d6ff" },
  { name: "Gaming", Icon: Gamepad2, color: "#ffc7ad" },
  { name: "Maison", Icon: House, color: "#bce9d3" },
  { name: "Wearables", Icon: Watch, color: "#ffd6bc" },
  { name: "Accessoires", Icon: Cable, color: "#cbd6ff" },
];

const heroSlides = [
  { eyebrow: "Semaine Audio", title: "Le son qui\nchange l’ambiance.", copy: "Une sélection pensée pour vos moments à vous.", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1800&q=90", tone: "audio" },
  { eyebrow: "Nouveautés Nexa", title: "La tech,\nen mieux.", copy: "Des essentiels choisis pour suivre votre rythme.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=90", tone: "watch" },
  { eyebrow: "Setup season", title: "Votre bureau,\nvotre énergie.", copy: "Pensé pour créer, jouer et avancer chaque jour.", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1800&q=90", tone: "desk" },
];

const formatPrice = (value: number) => `${value.toLocaleString("fr-TN")} DT`;

export default function Home() {
  const [activeHero, setActiveHero] = useState(0);
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tout voir");
  const [menuOpen, setMenuOpen] = useState(false);
  const touchStart = useRef(0);
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInput.current?.focus(), 50);
  }, [searchOpen]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveHero((current) => (current + 1) % heroSlides.length), 5600);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    try { setCart(JSON.parse(window.localStorage.getItem("nexa-cart") || "[]")); } catch { setCart([]); }
  }, []);

  useEffect(() => {
    try { setFavorites(JSON.parse(window.localStorage.getItem("nexa-favorites") || "[]")); } catch { setFavorites([]); }
  }, []);

  const searchResults = useMemo(() => products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()) || product.category.toLowerCase().includes(query.toLowerCase())).slice(0, 4), [query]);
  const cartTotal = cart.reduce((sum, product) => sum + product.price, 0);
  const slide = heroSlides[activeHero];

  function addToCart(product: Product) {
    setCart((current) => {
      const next = [...current, product];
      window.localStorage.setItem("nexa-cart", JSON.stringify(next));
      return next;
    });
    setToast(`${product.name} a été ajouté au panier`);
  }

  function toggleFavorite(id: number) {
    setFavorites((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      window.localStorage.setItem("nexa-favorites", JSON.stringify(next));
      return next;
    });
  }

  function browse(category = "Tout voir") {
    setSelectedCategory(category);
    document.getElementById("produits")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main>
      <div className="announcement"><span>Livraison offerte dès 199 DT</span></div>

      <header className="siteHeader">
        <button className="iconButton menuButton" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(true)}><i /><i /><i /></button>
        <a className="wordmark" href="#top" aria-label="Nexa Store, accueil">nexa<span>•</span></a>
        <nav className="desktopNav" aria-label="Navigation principale"><button onClick={() => browse()}>Boutique</button><button onClick={() => browse("Audio")}>Audio</button><button onClick={() => browse("Gaming")}>Gaming</button><button onClick={() => browse("Maison")}>Maison</button><a href="#journal">Journal</a></nav>
        <div className="headerActions"><button className="iconButton" aria-label="Rechercher" onClick={() => setSearchOpen(true)}>⌕</button><a className="iconButton desktopOnly" href="/favoris" aria-label="Voir les favoris"><Heart size={20} strokeWidth={1.8} /></a><a className="iconButton cartButton" href="/panier" aria-label="Ouvrir le panier"><span className="bagIcon" />{cart.length > 0 && <b>{cart.length}</b>}</a></div>
      </header>

      <section className={`hero hero-${slide.tone}`} id="top" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { const delta = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 45) setActiveHero((current) => (current + (delta < 0 ? 1 : heroSlides.length - 1)) % heroSlides.length); }}>
        <img key={slide.image} src={slide.image} alt="" className="heroImage" />
        <div className="heroShade" />
        <div className="heroContent" key={slide.title}><p className="eyebrow">{slide.eyebrow}</p><h1>{slide.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="heroCopy">{slide.copy}</p><button className="primaryButton" onClick={() => browse()}>Découvrir la sélection <span>→</span></button></div>
        <div className="heroMeta"><span>0{activeHero + 1} / 0{heroSlides.length}</span><div className="heroDots">{heroSlides.map((item, index) => <button key={item.title} aria-label={`Afficher la campagne ${index + 1}`} className={index === activeHero ? "active" : ""} onClick={() => setActiveHero(index)} />)}</div></div>
      </section>

      <section className="categories section"><div className="sectionTop"><div><p className="kicker">Explorer</p><h2>Tout commence ici.</h2></div><button className="textButton" onClick={() => browse()}>Voir tout <span>→</span></button></div><div className="categoryRail">{categories.map(({ name, Icon, color }) => <button className={`categoryCard ${selectedCategory === name ? "selected" : ""}`} key={name} onClick={() => browse(name)}><span style={{ background: color }}><Icon aria-hidden="true" strokeWidth={1.6} /></span><strong>{name}</strong></button>)}</div></section>

      <section className="featured section" id="produits"><div className="sectionTop"><div><p className="kicker">Sélection du moment</p><h2>{selectedCategory === "Tout voir" ? "Les essentiels Nexa." : `${selectedCategory}, sélectionnés.`}</h2></div><button className="textButton" onClick={() => setSelectedCategory("Tout voir")}>Tout voir <span>→</span></button></div><div className="productRail">{products.filter((product) => selectedCategory === "Tout voir" || product.category === selectedCategory).map((product) => <ProductCard key={product.id} product={product} favorite={favorites.includes(product.id)} onFavorite={() => toggleFavorite(product.id)} onAdd={() => addToCart(product)} />)}</div></section>

      <section className="campaign section"><div className="campaignVisual"><img src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=85" alt="Casque audio sur fond bleu" /><span className="orb orbOne" /><span className="orb orbTwo" /></div><div className="campaignCopy"><p className="kicker">Audio Week · jusqu’au 31 août</p><h2>Un son qui vous ressemble.</h2><p>Des écouteurs aux enceintes nomades : trouvez la pièce qui donne le ton à vos journées.</p><button className="darkButton" onClick={() => browse("Audio")}>Shopper l’audio <span>→</span></button><small>* Offre valable sur une sélection d’articles.</small></div></section>

      <section className="collections section"><div className="sectionTop"><div><p className="kicker">Inspirations</p><h2>Conçu pour votre quotidien.</h2></div></div><div className="collectionGrid"><button className="collectionCard large" onClick={() => browse("Gaming")}><img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85" alt="Setup gaming moderne" /><span><em>01</em><strong>Setup gaming</strong><i>Voir la collection →</i></span></button><button className="collectionCard" onClick={() => browse("Maison")}><img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85" alt="Objets connectés pour la maison" /><span><em>02</em><strong>Smart home</strong><i>Explorer →</i></span></button><button className="collectionCard" onClick={() => browse("Accessoires")}><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85" alt="Espace de travail minimal" /><span><em>03</em><strong>Bureau essentiel</strong><i>Explorer →</i></span></button></div></section>

      <section className="flash section"><div><p className="kicker">Dernières heures</p><h2>Le Pulse Watch S<br />à prix doux.</h2><p>Suivi d’activité, sommeil et appels. Un essentiel qui suit toutes vos journées.</p><div className="priceLine"><strong>219 DT</strong><del>259 DT</del><span>-15%</span></div><button className="primaryButton" onClick={() => addToCart(products[1])}>Ajouter au panier <span>→</span></button></div><img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1000&q=90" alt="Montre connectée noire" /></section>

      <section className="reviews section"><div className="sectionTop"><div><p className="kicker">Ils en parlent</p><h2>Des choix qui font la différence.</h2></div><div className="ratingBig"><b>4.8</b><span>★★★★★</span><small>sur +1 200 avis</small></div></div><div className="reviewGrid"><Review quote="Le casque Halo est devenu mon indispensable pour travailler. Le son est très propre et la livraison a été rapide." name="Yasmine B." product="Casque Halo Pro" /><Review quote="Un site clair, une belle sélection et un vrai soin dans l’emballage. Je recommande sans hésiter." name="Ahmed K." product="Orbit Mini Speaker" /><Review quote="La Pulse Watch est élégante et facile à utiliser. Très bon rapport qualité-prix." name="Sarra M." product="Pulse Watch S" /></div></section>

      <section className="story"><div className="storyImage"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85" alt="Personne travaillant avec des objets technologiques" /></div><div><p className="kicker">Notre approche</p><h2>La tech pensée<br />pour vivre mieux.</h2><p>Chez Nexa, nous sélectionnons des objets qui simplifient, inspirent et tiennent la distance. Pas plus. Juste mieux.</p><a href="#journal">Découvrir notre histoire <span>→</span></a></div></section>

      <section className="journal section" id="journal"><div className="sectionTop"><div><p className="kicker">Le journal Nexa</p><h2>Pour faire les bons choix.</h2></div><button className="textButton" onClick={() => setToast("Le journal arrive bientôt")}>Tous les articles <span>→</span></button></div><div className="articleGrid"><Article image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=85" tag="Guide d’achat" title="Comment choisir le casque qui vous suivra partout ?" /><Article image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=85" tag="Workspace" title="5 accessoires pour aimer encore plus votre bureau." /><Article image="https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=900&q=85" tag="Bien-être" title="Rester connecté sans rester collé à son écran." /></div></section>

      <section className="benefits"><div><span>↗</span><strong>Livraison rapide</strong><small>Partout en Tunisie</small></div><div><span>◈</span><strong>Paiement flexible</strong><small>Carte ou à la livraison</small></div><div><span>◌</span><strong>Retours simplifiés</strong><small>14 jours pour décider</small></div><div><span>✳</span><strong>Choix garanti</strong><small>Des produits qui durent</small></div></section>

      <section className="newsletter"><div><p className="kicker">Restez dans le rythme</p><h2>Les bonnes ondes,<br />directement chez vous.</h2></div><form onSubmit={(event) => { event.preventDefault(); setToast("Merci, vous êtes bien inscrit(e) !"); }}><label htmlFor="email">Votre adresse e-mail</label><div><input id="email" type="email" placeholder="vous@exemple.tn" required /><button aria-label="S’inscrire">→</button></div><small>Des nouveautés, des idées et des offres justes.</small></form></section>

      <footer><a className="wordmark" href="#top">nexa<span>•</span></a><p>Des objets bien choisis pour votre quotidien.</p><div className="footerLinks"><div><strong>Boutique</strong><a href="#produits">Nouveautés</a><a href="#produits">Best-sellers</a><a href="#produits">Offres du moment</a></div><div><strong>Aide</strong><a href="#top">Livraison</a><a href="#top">Retours</a><a href="#top">FAQ</a></div><div><strong>Suivre Nexa</strong><a href="#top">Instagram</a><a href="#top">Facebook</a><a href="#top">TikTok</a></div></div><small>© 2026 Nexa Store · Tunisie</small></footer>

      <nav className="mobileNav" aria-label="Navigation mobile"><button className="active" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>⌂<span>Accueil</span></button><button onClick={() => browse()}>▦<span>Boutique</span></button><button onClick={() => setSearchOpen(true)}>⌕<span>Recherche</span></button><a href="/favoris" aria-label="Voir les favoris"><Heart size={19} strokeWidth={1.8}/><span>Favoris</span></a><a href="/panier" aria-label="Voir le panier"><span className="bagIcon" />{cart.length > 0 && <b>{cart.length}</b>}<span>Panier</span></a></nav>

      {searchOpen && <div className="overlay" role="dialog" aria-modal="true" aria-label="Rechercher"><div className="searchPanel"><div className="searchTop"><button className="iconButton" onClick={() => setSearchOpen(false)} aria-label="Fermer la recherche">←</button><div><span>⌕</span><input ref={searchInput} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher un produit..." aria-label="Rechercher un produit" />{query && <button onClick={() => setQuery("")} aria-label="Effacer">×</button>}</div></div>{query ? <div className="searchResults"><p>Produits trouvés</p>{searchResults.length ? searchResults.map((product) => <a key={product.id} href={`/produit/${product.id}`} onClick={() => setSearchOpen(false)}><img src={product.image} alt="" /><span><strong>{product.name}</strong><small>{product.brand}</small></span><b>{formatPrice(product.price)}</b></a>) : <div className="emptySearch">Aucun résultat. Essayez « audio » ou «gaming».</div>}</div> : <div className="searchSuggestions"><p>Recherches populaires</p><div>{["Casque sans fil", "Montre connectée", "Setup gaming", "Chargeur"].map((item) => <button key={item} onClick={() => setQuery(item)}>{item} <span>↗</span></button>)}</div><p>Catégories tendances</p><div className="suggestCategories"><button onClick={() => { browse("Audio"); setSearchOpen(false); }}>Audio</button><button onClick={() => { browse("Gaming"); setSearchOpen(false); }}>Gaming</button><button onClick={() => { browse("Maison"); setSearchOpen(false); }}>Maison</button></div></div>}</div></div>}

      {cartOpen && <div className="overlay cartOverlay" role="dialog" aria-modal="true" aria-label="Votre panier" onClick={() => setCartOpen(false)}><aside className="cartDrawer" onClick={(event) => event.stopPropagation()}><div className="drawerTop"><div><p className="kicker">Votre sélection</p><h2>Panier <small>({cart.length})</small></h2></div><button className="iconButton" onClick={() => setCartOpen(false)} aria-label="Fermer le panier">×</button></div>{cart.length ? <><div className="cartItems">{cart.map((product, index) => <article key={`${product.id}-${index}`}><img src={product.image} alt="" /><div><small>{product.brand}</small><strong>{product.name}</strong><b>{formatPrice(product.price)}</b></div><button aria-label={`Retirer ${product.name}`} onClick={() => setCart((items) => items.filter((_, itemIndex) => itemIndex !== index))}>×</button></article>)}</div><div className="cartFooter"><p>Livraison <span>{cartTotal >= 199 ? "Offerte" : "Calculée à l’étape suivante"}</span></p><h3>Total <span>{formatPrice(cartTotal)}</span></h3><button className="primaryButton" onClick={() => { setCartOpen(false); setToast("Votre commande est prête à être finalisée."); }}>Passer au paiement <span>→</span></button><small>Paiement à la livraison ou par carte bancaire.</small></div></> : <div className="emptyCart"><span>▢</span><h3>Votre panier est vide.</h3><p>Des essentiels bien choisis vous attendent.</p><button className="darkButton" onClick={() => { setCartOpen(false); browse(); }}>Découvrir les produits</button></div>}</aside></div>}

      {menuOpen && <div className="overlay menuOverlay" role="dialog" aria-modal="true" aria-label="Menu"><div className="mobileMenu"><button className="iconButton" onClick={() => setMenuOpen(false)} aria-label="Fermer le menu">×</button><a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}>nexa<span>•</span></a><div>{["Boutique", "Audio", "Gaming", "Maison", "Journal"].map((item) => <button key={item} onClick={() => { setMenuOpen(false); item === "Journal" ? document.getElementById("journal")?.scrollIntoView({ behavior: "smooth" }) : browse(item === "Boutique" ? "Tout voir" : item); }}>{item}<span>→</span></button>)}</div><p>Livraison offerte dès 199 DT<br />Partout en Tunisie.</p></div></div>}
      {toast && <div className="toast" role="status">✓ <span>{toast}</span></div>}
    </main>
  );
}

function ProductCard({ product, favorite, onFavorite, onAdd }: { product: Product; favorite: boolean; onFavorite: () => void; onAdd: () => void }) {
  return <article className="productCard"><div className="productImage" style={{ background: product.color }}><a href={`/produit/${product.id}`} aria-label={`Voir ${product.name}`}><img src={product.image} alt={product.name} loading="lazy" /></a>{product.badge && <span className="badge">{product.badge}</span>}<button className={`wish ${favorite ? "isFavorite" : ""}`} aria-label={favorite ? "Retirer des favoris" : "Ajouter aux favoris"} onClick={onFavorite}><Heart size={18} strokeWidth={1.8} fill={favorite ? "currentColor" : "none"}/></button><button className="quickAdd" onClick={onAdd}>Ajouter <span>+</span></button></div><div className="productInfo"><small>{product.brand}</small><h3><a href={`/produit/${product.id}`}>{product.name}</a></h3><div><span className="stars">★ {product.rating}</span>{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}</div><strong>{formatPrice(product.price)}</strong></div></article>;
}

function Review({ quote, name, product }: { quote: string; name: string; product: string }) { return <article className="review"><span>★★★★★</span><p>“{quote}”</p><div><b>{name}</b><small>A acheté : {product}</small></div></article>; }
function Article({ image, tag, title }: { image: string; tag: string; title: string }) { return <article className="article"><img src={image} alt="" loading="lazy" /><p>{tag}</p><h3>{title}</h3><button aria-label={`Lire ${title}`}>Lire l’article <span>→</span></button></article>; }
