import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
import { useRef } from 'react';

const carouselImages = [hero1, hero2, hero3, hero4];

export default function Hero() {
  const ref = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const getClientX = (e) => (e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0);

  const onPointerDown = (e) => {
    const el = ref.current;
    if (!el) return;
    isDown.current = true;
    startX.current = getClientX(e);
    startScrollLeft.current = el.scrollLeft;
    // 拖曳時關閉平滑，避免延遲感
    // el.style.scrollBehavior = 'auto';
    // 視需要：鎖定指標（可省略）
    try { el.setPointerCapture?.(e.pointerId); } catch { }
  };

  const onPointerMove = (e) => {
    if (!isDown.current) return;
    const el = ref.current;
    if (!el) return;
    const x = getClientX(e);
    const dx = x - startX.current;
    el.scrollLeft = startScrollLeft.current - dx;
  };

  const endDrag = (e) => {
    const el = ref.current;
    isDown.current = false;
    if (el) {
      // 放開時恢復平滑，之後點箭頭或滾輪還是 smooth
      el.style.scrollBehavior = 'smooth';
      try { el.releasePointerCapture?.(e?.pointerId); } catch { }
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem explicabo sunt ipsum exercitationem consectetur debitis consequatur minima laboriosam dolorem?
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>

      {/* 包一層 relative 方便未來放箭頭；lg 才顯示 */}
      <div className="relative hidden lg:block">
        <div
          ref={ref}
          className="
            hidden lg:carousel carousel-center
            h-[28rem] p-4 space-x-4 bg-neutral rounded-box
            cursor-grab active:cursor-grabbing select-none
            touch-pan-y
          "
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          // 讓瀏覽器別把拖曳當成選字/拖圖片
          onDragStart={(e) => e.preventDefault()}
        >
          {carouselImages.map((src) => (
            <div key={src} className="carousel-item">
              <img
                src={src}
                alt=""
                className="rounded-box h-full w-80 object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
