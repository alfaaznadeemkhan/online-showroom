import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Search, X, Menu, Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function Header({ wishlistCount=0 }: { wishlistCount?: number }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [announcement, setAnnouncement] = useState(true)
  return <>
    {announcement && <div className="announcement"><span className="pulse-dot" /> Something exceptional is coming. <Link to="/coming-soon">Get launch updates <ArrowRight size={12}/></Link><button aria-label="Dismiss announcement" onClick={()=>setAnnouncement(false)}><X size={14}/></button></div>}
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Online Showroom home"><span className="brand-mark">OS</span><span>ONLINE <b>SHOWROOM</b><small>A WORLD OF DISCOVERY</small></span></Link>
      <nav className="desktop-nav"><Link to="/explore">Explore</Link><Link to="/categories">Categories</Link><Link to="/collections">Collections</Link><Link to="/showrooms">Showrooms</Link><Link to="/about">Our vision</Link></nav>
      <div className="header-actions"><Link className="icon-link" to="/explore" aria-label="Search"><Search size={19}/></Link><Link className="icon-link wishlist-link" to="/wishlist" aria-label="Wishlist"><Heart size={19}/>{wishlistCount>0&&<i>{wishlistCount}</i>}</Link><Link className="header-cta" to="/coming-soon">Coming soon <ArrowRight size={15}/></Link><button className="mobile-toggle" onClick={()=>setMobileOpen(v=>!v)} aria-label="Toggle navigation">{mobileOpen?<X/>:<Menu/>}</button></div>
    </header>
    {mobileOpen&&<nav className="mobile-nav"><Link onClick={()=>setMobileOpen(false)} to="/explore">Explore</Link><Link onClick={()=>setMobileOpen(false)} to="/categories">Categories</Link><Link onClick={()=>setMobileOpen(false)} to="/collections">Collections</Link><Link onClick={()=>setMobileOpen(false)} to="/showrooms">Showrooms</Link><Link onClick={()=>setMobileOpen(false)} to="/about">Our vision</Link><Link onClick={()=>setMobileOpen(false)} to="/coming-soon">Launch updates</Link></nav>}
  </>
}

export function Footer() {
  return <footer className="footer"><div className="footer-top"><div className="footer-brand"><Link className="brand brand-light" to="/"><span className="brand-mark">OS</span><span>ONLINE <b>SHOWROOM</b><small>A WORLD OF DISCOVERY</small></span></Link><p>A new destination for discovering exceptional products, inspiring showrooms, and ideas for everyday life.</p></div><div className="footer-col"><strong>Discover</strong><Link to="/explore">Explore products</Link><Link to="/categories">All categories</Link><Link to="/collections">Collections</Link><Link to="/showrooms">Showrooms</Link></div><div className="footer-col"><strong>Our world</strong><Link to="/about">Our vision</Link><Link to="/coming-soon">Coming soon</Link><Link to="/contact">Contact</Link><Link to="/wishlist">Wishlist</Link></div><div className="footer-col"><strong>Good to know</strong><Link to="/privacy">Privacy policy</Link><Link to="/terms">Terms of use</Link><span className="footer-note">A preview, not a live marketplace.</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Online Showroom. All rights reserved.</span><span>Thoughtfully discovered. Soon to be yours.</span></div></footer>
}
export function Eyebrow({children}: {children: ReactNode}) { return <div className="eyebrow"><Sparkles size={13}/>{children}</div> }
export function SectionHeading({eyebrow,title,description,link,to}: {eyebrow?:string;title:string;description?:string;link?:string;to?:string}) {
 return <div className="section-heading"><div>{eyebrow&&<Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{description&&<p>{description}</p>}</div>{link&&to&&<Link className="text-link" to={to}>{link}<ArrowRight size={16}/></Link>}</div>
}
export function ComingSoonNote({text='The marketplace is in the making. Real orders are not available yet.'}: {text?:string}) {return <div className="notice"><span className="notice-star">✳</span><span>{text}</span><Link to="/coming-soon">Learn more <ArrowRight size={13}/></Link></div>}
export function ProductCard({product, saved, onToggle}: {product:any;saved:boolean;onToggle:()=>void}) {
 return <motion.article className="product-card" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:.45,ease:[.22,1,.36,1]}} whileHover={{y:-3}}><div className="product-image-wrap"><Link to={`/product/${product.slug}`}><img src={product.image} alt={product.name} loading="lazy"/>{product.tag&&<span className="product-tag">{product.tag}</span>}</Link><button className={`save-button ${saved?'is-saved':''}`} onClick={onToggle} aria-label={saved?'Remove from wishlist':'Add to wishlist'}><Heart size={17} fill={saved?'currentColor':'none'}/></button></div><div className="product-meta"><span>{product.category}</span><span className="sample-label">PREVIEW</span></div><Link to={`/product/${product.slug}`} className="product-name">{product.name}</Link><div className="product-bottom"><strong>{product.priceOnRequest?'Price on request':`₹${product.price.toLocaleString('en-IN')}`}</strong><Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}><ArrowRight size={17}/></Link></div></motion.article>
}
export function SignupForm() {
 const [email,setEmail] = useState('')
 const [consent,setConsent] = useState(false)
 const [state,setState] = useState<'idle'|'error'|'demo'>('idle')
 return <form className="signup-form" onSubmit={e=>{e.preventDefault();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||!consent){setState('error');return}setState('demo')}}>
  <div className="signup-fields"><label className="sr-only" htmlFor="launch-email">Email address</label><input id="launch-email" type="email" placeholder="Your email address" value={email} onChange={e=>{setEmail(e.target.value);setState('idle')}}/><button type="submit">Keep me posted <ArrowRight size={16}/></button></div>
  <label className="consent"><input type="checkbox" checked={consent} onChange={e=>{setConsent(e.target.checked);setState('idle')}}/> I agree to receive launch updates and have read the privacy note.</label>
  {state==='error'&&<p className="form-message error">Enter a valid email and confirm your consent.</p>}
  {state==='demo'&&<p className="form-message">This is a frontend demo. Your email has <b>not</b> been saved or submitted. Connect a signup service before launch.</p>}
  <p className="privacy-hint">No spam. Just a note when the experience is ready. Demo form — not connected to a mailing list.</p>
 </form>
}
