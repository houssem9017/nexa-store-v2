export type CatalogProduct = { id:number; name:string; brand:string; price:number; oldPrice?:number; image:string; category:string; description:string };

export const catalog: CatalogProduct[] = [
  { id:1, name:"Casque Halo Pro", brand:"SONOSPHERE", price:289, oldPrice:359, image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85", category:"Audio", description:"Un casque immersif, confortable et précis, conçu pour les trajets, les longues sessions de travail et les instants où vous avez besoin de couper le bruit." },
  { id:2, name:"Pulse Watch S", brand:"NEXA LAB", price:219, oldPrice:259, image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=85", category:"Wearables", description:"Suivez votre rythme, vos appels et vos temps de récupération avec une montre élégante qui se porte du matin au soir." },
  { id:3, name:"Orbit Mini Speaker", brand:"AER", price:149, oldPrice:179, image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85", category:"Audio", description:"Une enceinte compacte, généreuse et facile à emmener, avec un son précis qui trouve sa place partout." },
  { id:4, name:"Rise 3-in-1 Charge", brand:"FORM", price:119, image:"https://images.unsplash.com/photo-1583863788434-e58a36330c3a?auto=format&fit=crop&w=900&q=85", category:"Accessoires", description:"Un point de charge élégant pour votre téléphone, vos écouteurs et votre montre, sans encombrer votre espace." },
  { id:5, name:"Clavier Arc 75", brand:"KEYS", price:199, image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85", category:"Gaming", description:"Un clavier compact et agréable à utiliser, avec un format 75 % pensé pour libérer votre bureau." },
  { id:6, name:"Caméra Nest View", brand:"HOMEWAY", price:179, oldPrice:209, image:"https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=85", category:"Maison", description:"Gardez un œil sur ce qui compte avec une caméra discrète et simple à installer, pour plus de sérénité au quotidien." },
];

export const price = (value:number) => `${value.toLocaleString("fr-TN")} DT`;
export const byId = (id:string) => catalog.find((product) => product.id === Number(id));
export const readCart = (): CatalogProduct[] => { try { return JSON.parse(localStorage.getItem("nexa-cart") || "[]"); } catch { return []; } };
export const writeCart = (cart:CatalogProduct[]) => localStorage.setItem("nexa-cart", JSON.stringify(cart));
