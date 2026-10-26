export type Category = { slug: string; name: string; subtitle: string; image: string }
export type Product = { slug: string; name: string; category: string; price?: number; priceOnRequest?: boolean; image: string; description: string; details: string[]; tag?: string }
export type Showroom = { slug: string; name: string; category: string; city: string; image: string; description: string }

export const categories: Category[] = [
  { slug:'furniture-interiors', name:'Furniture & Interiors', subtitle:'Spaces that feel like you', image:'photo-1616486338812-3dadae4b4ace' },
  { slug:'fashion-lifestyle', name:'Fashion & Lifestyle', subtitle:'Find your point of view', image:'photo-1483985988355-763728e1935b' },
  { slug:'jewellery-accessories', name:'Jewellery & Accessories', subtitle:'Little details, lasting impact', image:'photo-1611652022419-a9419f74343d' },
  { slug:'electronics-appliances', name:'Electronics & Appliances', subtitle:'A smarter everyday', image:'photo-1498049794561-7780e7231661' },
  { slug:'home-kitchen', name:'Home & Kitchen', subtitle:'Thoughtful everyday living', image:'photo-1556911220-bff31c812dba' },
  { slug:'beauty-personal-care', name:'Beauty & Personal Care', subtitle:'Your daily ritual, elevated', image:'photo-1596462502278-27bfdc403348' },
  { slug:'sports-fitness', name:'Sports & Fitness', subtitle:'Move in your own way', image:'photo-1534438327276-14e5300c3a48' },
  { slug:'automotive', name:'Automotive', subtitle:'Made for the journey', image:'photo-1492144534655-ae79c964c9d7' },
  { slug:'kids-baby', name:'Kids & Baby', subtitle:'Little things, big wonder', image:'photo-1503919005314-30d93d07d823' },
  { slug:'office-business', name:'Office & Business Equipment', subtitle:'Make room for good work', image:'photo-1497366754035-f200968a6e72' },
  { slug:'art-collectibles', name:'Art & Collectibles', subtitle:'Objects with a story', image:'photo-1579783902614-a3fb3927b6a5' },
  { slug:'gifts-lifestyle', name:'Gifts & Lifestyle', subtitle:'Considered, never ordinary', image:'photo-1513201099705-a9746e1e201f' },
]
const img = (id: string, w=1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`
export const products: Product[] = [
  {slug:'arc-lounge-chair', name:'Arc Lounge Chair', category:'Furniture & Interiors', price:24999, image:img('photo-1567538096630-e0c55bd6374c'), description:'A sculptural accent chair with a soft silhouette and a considered, timeless profile.', details:['Solid wood frame','Textured upholstery','Illustrative sample product'],tag:'Design pick'},
  {slug:'solstice-pendant', name:'Solstice Pendant', category:'Jewellery & Accessories', price:4299, image:img('photo-1611652022419-a9419f74343d'), description:'An understated jewellery piece inspired by warm light and everyday elegance.', details:['Gold-tone finish','Minimal design','Illustrative sample product'],tag:'New edit'},
  {slug:'form-table-lamp', name:'Form Table Lamp', category:'Home & Kitchen', price:5890, image:img('photo-1507473885765-e6ed057f782c'), description:'Soft ambient lighting in a clean, sculptural form for quiet corners and thoughtful spaces.', details:['Warm ambient light','Contemporary form','Illustrative sample product']},
  {slug:'studio-headphones', name:'Studio Headphones', category:'Electronics & Appliances', price:8999, image:img('photo-1505740420928-5e560c06d30e'), description:'A clean everyday audio concept designed around comfort, focus, and modern living.', details:['Over-ear silhouette','Wireless concept','Illustrative sample product']},
  {slug:'linen-everyday-set', name:'Linen Everyday Set', category:'Fashion & Lifestyle', price:3299, image:img('photo-1483985988355-763728e1935b'), description:'Easy, relaxed styling built around natural textures and a versatile neutral palette.', details:['Relaxed fit concept','Neutral palette','Illustrative sample product']},
  {slug:'atelier-vase', name:'Atelier Ceramic Vase', category:'Furniture & Interiors', price:2190, image:img('photo-1578500494198-246f612d3b3d'), description:'A tactile ceramic accent made to bring shape and calm to a shelf, console, or table.', details:['Ceramic look','Sculptural profile','Illustrative sample product']},
  {slug:'everyday-watch', name:'Everyday Watch', category:'Fashion & Lifestyle', price:7499, image:img('photo-1524805444758-089113d48a6d'), description:'A versatile timepiece concept with a balanced face and a refined everyday feel.', details:['Minimal dial','Classic styling','Illustrative sample product']},
  {slug:'modern-work-desk', name:'Modern Work Desk', category:'Office & Business Equipment', price:18999, image:img('photo-1497366811353-6870744d04b2'), description:'A workspace essential with a pared-back profile and room to think clearly.', details:['Clean lines','Work-from-home concept','Illustrative sample product']},
  {slug:'glow-care-kit', name:'Glow Care Kit', category:'Beauty & Personal Care', price:1599, image:img('photo-1608248543803-ba4f8c70ae0b'), description:'A self-care edit presented as a sample of the personal care category.', details:['Giftable concept','Daily ritual','Illustrative sample product']},
  {slug:'weekend-travel-bag', name:'Weekend Travel Bag', category:'Gifts & Lifestyle', price:4699, image:img('photo-1553062407-98eeb64c6a62'), description:'A practical carryall concept for spontaneous plans and short escapes.', details:['Everyday carry','Travel-inspired design','Illustrative sample product']},
  {slug:'urban-cycle-helmet', name:'Urban Cycle Helmet', category:'Sports & Fitness', price:3499, image:img('photo-1558618666-fcd25c85cd64'), description:'A modern active-lifestyle concept balancing streamlined form and everyday utility.', details:['Urban design concept','Active lifestyle','Illustrative sample product']},
  {slug:'sculpture-no-04', name:'Sculpture No. 04', category:'Art & Collectibles', priceOnRequest:true, image:img('photo-1577083552431-6e5fd01aa342'), description:'An art object preview representing the future discovery of distinctive makers and pieces.', details:['Collectible concept','Price on request','Illustrative sample product']},
]
export const collections = [
  {slug:'modern-living', name:'Modern Living', description:'Considered pieces for spaces that make you feel at home.', image:img('photo-1616486338812-3dadae4b4ace')},
  {slug:'everyday-essentials', name:'Everyday Essentials', description:'Useful things, thoughtfully chosen for everyday rituals.', image:img('photo-1494438639946-1ebd1d20bf85')},
  {slug:'statement-jewellery', name:'Statement Jewellery', description:'Small details that bring a little more personality.', image:img('photo-1611652022419-a9419f74343d')},
  {slug:'smart-living', name:'Smart Living', description:'Modern tools and objects for a more connected home.', image:img('photo-1498049794561-7780e7231661')},
  {slug:'style-edit', name:'Style Edit', description:'A considered edit of expressive everyday style.', image:img('photo-1483985988355-763728e1935b')},
  {slug:'workspaces-reimagined', name:'Workspaces Reimagined', description:'Ideas for a workspace that works for you.', image:img('photo-1497366754035-f200968a6e72')},
]
export const showrooms: Showroom[] = [
  {slug:'the-form-house', name:'The Form House', category:'Furniture & Interiors', city:'Sample location · Jaipur', image:img('photo-1600210492486-724fe5c67fb0'), description:'A sample showroom preview for contemporary furniture and considered interiors.'},
  {slug:'everyday-atelier', name:'Everyday Atelier', category:'Fashion & Lifestyle', city:'Sample location · Mumbai', image:img('photo-1441986300917-64674bd600d8'), description:'A sample showroom preview exploring personal style and wardrobe essentials.'},
  {slug:'little-gold-studio', name:'Little Gold Studio', category:'Jewellery & Accessories', city:'Sample location · Delhi', image:img('photo-1515562141207-7a88fb7ce338'), description:'A sample showroom preview for expressive accessories and thoughtful gifts.'},
]
export const imageUrl = (id: string, width=1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
