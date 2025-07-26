'use client';
import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';

const TWEEN_FACTOR_BASE = 0.84;
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

export default function EmblaCarousel({ slides, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  // Tween opacity as before…
  const setTweenFactor = useCallback((api) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((api, eventName) => {
    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();
    const slidesInView = api.slidesInView();
    const isScroll = eventName === 'scroll';

    api.scrollSnapList().forEach((snap, snapIndex) => {
      let diff = snap - scrollProgress;
      const registry = engine.slideRegistry[snapIndex];

      registry.forEach((slideIndex) => {
        if (isScroll && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              diff = Math.sign(target) === -1
                ? snap - (1 + scrollProgress)
                : snap + (1 - scrollProgress);
            }
          });
        }

        const t = 1 - Math.abs(diff * tweenFactor.current);
        const opacity = numberWithinRange(t, 0, 1);
        api.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    //— TWEEN SETUP
    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);

    //— VIDEO PLAY/PAUSE
    const handleSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      emblaApi.slideNodes().forEach((slideEl, i) => {
        const video = slideEl.querySelector('video');
        if (!video) return;
        i === idx ? video.play().catch(() => {}) : video.pause();
      });
    };
    emblaApi.on('reInit', handleSelect).on('select', handleSelect);
    handleSelect();

    //— AUTOPLAY: scroll to next every 10s
    const interval = setInterval(() => {
      if (!emblaApi.canScrollNext() && options.loop) {
        emblaApi.scrollTo(0);         // wrap to first slide
      } else {
        emblaApi.scrollNext();
      }
    }, 10_000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [emblaApi, options.loop, setTweenFactor, tweenOpacity]);

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((src, idx) => (
            <div className="embla__slide flex-shrink-0 w-full" key={idx}>
              <video
                src={src}
                className="w-full h-auto"
                loop
                muted
                autoPlay
                playsInline
              />
            </div>
          ))}
        </div>

        {/* Prev/Next overlaid */}
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
}
