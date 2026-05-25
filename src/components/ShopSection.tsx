import React, { useState } from 'react';
import { shopItems } from '../data';
import { ShopItem } from '../types';
import { ShoppingBag, X, Check, ArrowRight, Tag, Star, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartItem extends ShopItem {
  quantity: number;
}

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'apparel' | 'vintage' | 'novelty' | 'seasonal'>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountMultiplier, setDiscountMultiplier] = useState(0); // e.g. 0.23 for 23% off
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  // Checkout flow state
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  const [shippingName, setShippingName] = useState('');
  const [shippingEmail, setShippingEmail] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [orderId, setOrderId] = useState('');

  const filteredItems = shopItems.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  const handleAddToCart = (item: ShopItem) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart(cart.filter(c => c.id !== itemId));
  };

  const handleUpdateQty = (itemId: string, diff: number) => {
    setCart(cart.map(c => {
      if (c.id === itemId) {
        const nextQty = c.quantity + diff;
        return nextQty > 0 ? { ...c, quantity: nextQty } : c;
      }
      return c;
    }));
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === '23FLAVORS') {
      setDiscountMultiplier(0.23);
      setCouponSuccess('Success! Code "23FLAVORS" applied for 23% secret formulation discount.');
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try entering "23FLAVORS" for a secret discount!');
      setCouponSuccess('');
    }
  };

  // Subtotal and final values
  const subtotal = cart.reduce((acc, c) => acc + (c.price * c.quantity), 0);
  const discountAmount = subtotal * discountMultiplier;
  const deliveryFee = subtotal > 50 ? 0 : 5.99;
  const finalTotal = subtotal - discountAmount + deliveryFee;

  const handleStartCheckout = () => {
    setCheckoutStep('shipping');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingName || !shippingEmail || !shippingAddress) return;
    
    const randomId = 'DP-' + Math.floor(100000 + Math.random() * 900000) + '-C';
    setOrderId(randomId);
    setCheckoutStep('success');
    setCart([]); // Clear cart
  };

  const handleResetCheckout = () => {
    setCheckoutStep('cart');
    setShippingName('');
    setShippingEmail('');
    setShippingAddress('');
    setCouponCode('');
    setDiscountMultiplier(0);
    setCouponSuccess('');
    setCouponError('');
    setIsCartOpen(false);
  };

  return (
    <section id="shop-section" className="py-20 bg-white text-[#1F0206] px-4 md:px-8 border-b border-[#F7F3E9]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header and Cart Trigger */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
          <div className="text-left max-w-xl">
            <span className="text-[#C8102E] font-mono tracking-widest text-xs uppercase font-bold px-3 py-1 bg-[#FDF2F4] rounded-full inline-block">
              Dr Pepper Merchandise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#711324] mt-3 tracking-tight font-heading">
              The Official Dr Pepper Store
            </h2>
            <p className="mt-3 text-[#1F0206]/70 text-sm">
              Authentic vintage gear, custom cut varsity clothing, and limited novelty drops inspired by your favorite summer soft drinks.
            </p>
          </div>

          {/* Cart Floating Button */}
          <button
            onClick={() => {
              setIsCartOpen(true);
              setCheckoutStep('cart');
            }}
            className="flex items-center gap-2.5 bg-[#711324] hover:bg-[#8e1b30] text-white px-6 py-3 rounded-2xl font-bold shadow-md transition-all scale-100 hover:scale-105"
          >
            <ShoppingBag size={18} />
            <span>Pepper Bag</span>
            <span className="bg-[#D1A153] text-[#1F0206] text-xs px-2.5 py-0.5 rounded-full font-black">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </button>
        </div>

        {/* Categories togglers */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-100 pb-4">
          {[
            { id: 'all', label: 'All Merch' },
            { id: 'apparel', label: 'Apparel & Vintage Cues' },
            { id: 'vintage', label: 'Vintage Collections' },
            { id: 'novelty', label: 'Novelty & Seasonal Drops' }
          ].map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === category.id
                  ? 'bg-[#711324] text-white'
                  : 'bg-[#F7F3E9] text-gray-700 hover:bg-[#EFEAE2]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Shop Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-[#FFFDF9] border border-[#F7F3E9] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                {/* Visual Header */}
                <div className="aspect-square bg-[#F7F3E9] rounded-xl flex items-center justify-center text-4xl mb-4 relative overflow-hidden">
                  {item.image}
                  {item.isNew && (
                    <span className="absolute top-2.5 right-2.5 bg-[#C8102E] text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      DROP
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-mono text-gray-400 font-bold tracking-wide">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500 font-mono text-xs">
                    <Star size={11} className="fill-current" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-sm text-[#1F0206] mt-2 group-hover:text-[#711324] transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-base font-bold text-[#711324] font-mono">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-[#F7F3E9] hover:bg-[#711324] text-[#711324] hover:text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Add To Bag</span>
                  <ArrowRight size={12} className="opacity-60" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Promo code tip banner */}
        <div className="mt-12 bg-[#711324]/5 border border-[#711324]/10 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between text-xs gap-3">
          <div className="flex items-center gap-2">
            <Tag size={16} className="text-[#D1A153]" />
            <span className="text-gray-700">
              Fan Portal Special: Get <strong className="font-extrabold text-[#711324]">23% off</strong> all merchandise in cart! Use code <strong className="font-mono bg-white px-2 py-0.5 rounded border text-[#711324] font-bold">23FLAVORS</strong>.
            </span>
          </div>
          <span className="text-[10px] text-gray-400 uppercase font-mono">Keurig Dr Pepper Partner Store</span>
        </div>

        {/* Sliding Shopping Cart & Checkout Overlay */}
        <AnimatePresence>
          {isCartOpen && (
            <div className="fixed inset-0 z-50 overflow-hidden">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
              ></div>

              <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 pointer-events-none">
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="w-screen max-w-md pointer-events-auto h-full"
                >
                  <div className="h-full bg-white shadow-2xl flex flex-col justify-between text-stone-950">
                    
                    {/* Drawer Header */}
                    <div className="px-6 py-5 bg-[#711324] text-white flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <ShoppingBag size={20} className="text-[#D1A153]" />
                        <h2 className="text-lg font-bold font-heading">
                          {checkoutStep === 'cart' && 'Your Pepper Bag'}
                          {checkoutStep === 'shipping' && 'Shipping Details'}
                          {checkoutStep === 'success' && 'Receipt Confirmed'}
                        </h2>
                      </div>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Step 1: Cart View list */}
                    {checkoutStep === 'cart' && (
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {cart.length === 0 ? (
                          <div className="h-64 flex flex-col items-center justify-center text-center text-gray-400 gap-3">
                            <ShoppingBag size={48} className="stroke-1 text-gray-300" />
                            <div>
                              <p className="text-sm font-bold">Your bag is empty</p>
                              <p className="text-xs">Explore classical varsity apparel or custom coconut pool floats to get started.</p>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto pr-2">
                              {cart.map((item) => (
                                <div key={item.id} className="py-4 flex gap-4 first:pt-0">
                                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                                    {item.image}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-xs font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                                    <span className="text-xs text-[#711324] font-mono font-bold">${item.price.toFixed(2)}</span>
                                    
                                    <div className="flex items-center justify-between mt-2">
                                      <div className="flex items-center gap-2 bg-gray-50 border rounded-lg px-1.5 py-0.5">
                                        <button
                                          onClick={() => handleUpdateQty(item.id, -1)}
                                          className="text-xs text-slate-500 hover:text-black font-extrabold px-1"
                                        >
                                          -
                                        </button>
                                        <span className="text-xs font-bold text-gray-800 pointer-events-none font-mono">
                                          {item.quantity}
                                        </span>
                                        <button
                                          onClick={() => handleUpdateQty(item.id, 1)}
                                          className="text-xs text-slate-500 hover:text-black font-extrabold px-1"
                                        >
                                          +
                                        </button>
                                      </div>
                                      <button
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className="text-gray-400 hover:text-rose-600 p-1"
                                      >
                                        <Trash2 size={13} />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Coupon segment */}
                            <form onSubmit={handleApplyCoupon} className="border-t border-gray-100 pt-4">
                              <label className="block text-[10px] uppercase font-mono text-gray-400 font-bold mb-1.5">
                                Enter Promo Code
                              </label>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  placeholder="e.g. 23FLAVORS"
                                  value={couponCode}
                                  onChange={(e) => setCouponCode(e.target.value)}
                                  className="flex-1 p-2 bg-gray-50 border outline-none text-xs rounded-lg uppercase tracking-wider font-extrabold"
                                />
                                <button
                                  type="submit"
                                  className="bg-stone-900 text-white text-xs px-4 rounded-lg font-bold hover:bg-black transition-colors"
                                >
                                  Apply
                                </button>
                              </div>
                              {couponError && <p className="text-rose-600 text-[10px] mt-1 font-semibold">{couponError}</p>}
                              {couponSuccess && <p className="text-emerald-600 text-[10px] mt-1 font-semibold">{couponSuccess}</p>}
                            </form>

                            {/* Bill computation panel */}
                            <div className="bg-amber-50/40 border border-amber-900/10 rounded-2xl p-4 text-xs space-y-2 font-medium">
                              <div className="flex justify-between text-stone-600">
                                <span>Subtotal</span>
                                <span className="font-mono">${subtotal.toFixed(2)}</span>
                              </div>
                              {discountAmount > 0 && (
                                <div className="flex justify-between text-emerald-600 font-semibold">
                                  <span>23 Flavors Discount (23%)</span>
                                  <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                                </div>
                              )}
                              <div className="flex justify-between text-stone-600">
                                <span>Delivery Fee</span>
                                <span className="font-mono">
                                  {deliveryFee === 0 ? 'FREE (Over $50)' : `$${deliveryFee.toFixed(2)}`}
                                </span>
                              </div>
                              <div className="flex justify-between font-extrabold text-sm text-stone-900 border-t border-amber-900/10 pt-2 mt-2">
                                <span>Checkout Total</span>
                                <span className="font-mono text-[#711324]">${finalTotal.toFixed(2)}</span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Step 2: Shipping checkout form */}
                    {checkoutStep === 'shipping' && (
                      <form onSubmit={handlePlaceOrder} className="flex-1 p-6 space-y-5">
                        <h3 className="font-bold text-sm text-gray-900 pb-2 border-b">Courier Destination Address</h3>
                        
                        <div>
                          <label className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">
                            Recipient Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Alex Mercer"
                            value={shippingName}
                            onChange={(e) => setShippingName(e.target.value)}
                            className="w-full p-2.5 text-xs rounded-lg border outline-none focus:border-[#711324] text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="alex@gmail.com"
                            value={shippingEmail}
                            onChange={(e) => setShippingEmail(e.target.value)}
                            className="w-full p-2.5 text-xs rounded-lg border outline-none focus:border-[#711324] text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">
                            Delivery Home Address
                          </label>
                          <textarea
                            required
                            rows={3}
                            placeholder="124 Cedar Street, Austin, TX, 78701"
                            value={shippingAddress}
                            onChange={(e) => setShippingAddress(e.target.value)}
                            className="w-full p-2.5 text-xs rounded-lg border outline-none focus:border-[#711324] text-slate-800"
                          />
                        </div>

                        {/* Credit card graphic element */}
                        <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-[#711324] p-4 rounded-xl text-white font-mono text-[11px] h-32 flex flex-col justify-between shadow-md">
                          <span className="text-[9px] uppercase tracking-widest block font-bold text-slate-400">
                            Pepper Hood VIP Loyal Card
                          </span>
                          <span className="text-sm font-bold block tracking-widest mt-1">•••• •••• •••• 1885</span>
                          <div className="flex justify-between items-center text-[9px] text-zinc-400 mt-2">
                            <span>Holder: {shippingName || 'FAN PORTAL MEMBER'}</span>
                            <span>Exp: 10/24</span>
                          </div>
                        </div>

                        <div className="bg-[#F7F3E9] p-3 text-[10.5px] leading-relaxed text-stone-600 rounded-xl">
                          Your purchase total of <strong>${finalTotal.toFixed(2)}</strong> is fully validated. Standard transport courier shipping routes directly via local warehouse networks.
                        </div>
                      </form>
                    )}

                    {/* Step 3: Success Confirmation */}
                    {checkoutStep === 'success' && (
                      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-3xl">
                          <Check size={32} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-heading text-stone-900">Dr Pepper Order Placed!</h3>
                          <p className="text-xs text-gray-600 mt-1 max-w-sm">
                            We have registered your simulated delivery coordinate pipeline. Processing matches and retro shipping packets immediately!
                          </p>
                        </div>

                        <div className="bg-amber-50/40 border rounded-2xl p-4 w-full text-left font-mono text-[11.5px] space-y-1">
                          <span className="block border-b pb-1 mb-2 text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                            Official Receipt Summary
                          </span>
                          <div><span className="text-stone-400">Order Serial:</span> {orderId}</div>
                          <div><span className="text-stone-400">Recipient:</span> {shippingName}</div>
                          <div><span className="text-stone-400">Address:</span> {shippingAddress}</div>
                          <div><span className="text-stone-400">Amount Charged:</span> ${finalTotal.toFixed(2)}</div>
                          <div><span className="text-stone-400">Voucher applied:</span> {discountMultiplier > 0 ? '23FLAVORS (23%)' : 'None'}</div>
                        </div>

                        <button
                          onClick={handleResetCheckout}
                          className="w-full py-3 bg-[#711324] hover:bg-[#8e1b30] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                        >
                          Restart Store Browsing
                        </button>
                      </div>
                    )}

                    {/* Bottom Drawer Bar controls */}
                    {cart.length > 0 && checkoutStep !== 'success' && (
                      <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-3">
                        {checkoutStep === 'shipping' && (
                          <button
                            type="button"
                            onClick={() => setCheckoutStep('cart')}
                            className="w-1/3 py-3 border border-gray-300 text-stone-700 text-xs font-bold rounded-xl hover:bg-gray-100 transition-colors"
                          >
                            Back To Bag
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            if (checkoutStep === 'cart') handleStartCheckout();
                            else {
                              // Trigger submit via virtual event triggering or direct handle
                              const mockEvent = { preventDefault: () => {} } as React.FormEvent;
                              handlePlaceOrder(mockEvent);
                            }
                          }}
                          disabled={checkoutStep === 'shipping' && (!shippingName || !shippingEmail || !shippingAddress)}
                          className={`flex-1 py-3 text-white text-xs font-extrabold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 ${
                            checkoutStep === 'shipping' && (!shippingName || !shippingEmail || !shippingAddress)
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                              : 'bg-[#711324] hover:bg-[#8e1b30] cursor-pointer'
                          }`}
                        >
                          {checkoutStep === 'cart' ? (
                            <>
                              <span>Checkout Subtotal</span>
                              <ArrowRight size={14} />
                            </>
                          ) : (
                            <span>Transmit Simulated Order</span>
                          )}
                        </button>
                      </div>
                    )}

                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
