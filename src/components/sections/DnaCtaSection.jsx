import OrangeButton from '../common/OrangeButton';

const DnaCtaSection = () => (
  <section className="bg-white pb-[120px] pt-20 max-sm:py-[72px]" aria-labelledby="dna-cta-title">
    <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
      <div className="relative overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_84%_22%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(135deg,#ff6b00,#e85f00)] p-[clamp(42px,7vw,76px)] text-white">
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[length:46px_46px] opacity-10" aria-hidden="true" />
        <p className="relative z-[1] mb-7 inline-flex items-center gap-3.5 text-[12px] font-extrabold uppercase leading-none tracking-[0.16em] text-white/85">
          <span className="h-0.5 w-10 bg-white/75" aria-hidden="true" />
          Partner With Killis Bird
        </p>
        <h2 id="dna-cta-title" className="relative z-[1] max-w-[820px] font-heading text-[clamp(38px,5vw,72px)] font-normal leading-[1.06] tracking-[-0.055em] text-white">Ready to Build the Future With Us?</h2>
        <p className="relative z-[1] my-7 max-w-[620px] text-lg leading-[1.75] text-white/80">
        </p>
        <OrangeButton to="/contact" aria-label="Partner with Killis Bird" className="relative z-[1] bg-white text-[#070707] hover:bg-[#fff0e5] focus-visible:bg-[#fff0e5]">
          Partner With Us
        </OrangeButton>
      </div>
    </div>
  </section>
);

export default DnaCtaSection;
