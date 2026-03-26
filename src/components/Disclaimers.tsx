/**
 * Reusable SEC-compliant disclaimer components.
 * Used across the site wherever return figures or testimonials appear.
 */

interface PerformanceDisclaimerProps {
  className?: string;
  variant?: 'light' | 'dark' | 'inline';
}

/**
 * Required near any performance/return claims per SEC Marketing Rule 206(4)-1.
 */
export function PerformanceDisclaimer({ className = '', variant = 'light' }: PerformanceDisclaimerProps) {
  const base = variant === 'dark'
    ? 'text-white/40'
    : variant === 'inline'
    ? 'text-ink-400'
    : 'text-ink-400';

  return (
    <p className={`text-[10px] leading-[1.6] ${base} ${className}`}>
      All return figures shown are <strong>targets only</strong> and are not guarantees of future performance. 
      Past performance does not guarantee future results. Investments involve risk, including the potential 
      <strong> loss of principal</strong>. Trade finance investments are illiquid and suitable only for accredited 
      investors who can bear the risk of loss. This is not an offer to sell or a solicitation of an offer to 
      buy any security. Securities are offered only pursuant to a private placement memorandum.
    </p>
  );
}

interface TestimonialDisclaimerProps {
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Required below every testimonial/endorsement per SEC Marketing Rule.
 */
export function TestimonialDisclaimer({ className = '', variant = 'light' }: TestimonialDisclaimerProps) {
  const base = variant === 'dark' ? 'text-white/35' : 'text-ink-400';

  return (
    <p className={`text-[9px] leading-[1.5] ${base} ${className}`}>
      Testimonial may not be representative of the experience of other investors. Testimonial is no guarantee 
      of future performance or success. The person providing the testimonial was not compensated for doing so. 
      Past performance is not indicative of future results. Investing involves risk including the potential loss of principal.
    </p>
  );
}

/**
 * Full risk disclosure for investment structure / CTA sections.
 */
export function RiskDisclosure({ className = '' }: { className?: string }) {
  return (
    <div className={`text-[9px] text-ink-400 leading-[1.6] space-y-2 ${className}`}>
      <p>
        <strong>Important Risk Disclosure:</strong> Investments in trade finance involve significant risks, 
        including but not limited to: risk of loss of principal, counterparty default risk, concentration risk, 
        liquidity risk (investments cannot be easily redeemed), currency risk for cross-border transactions, 
        and regulatory risk. Returns are not guaranteed and actual results may differ materially from targets stated.
      </p>
      <p>
        World Bridge Capital investments are offered only to verified accredited investors as defined under 
        SEC Rule 501 of Regulation D. This website does not constitute an offer to sell or a solicitation of 
        an offer to buy any securities. Such offers are made only by means of a confidential private placement 
        memorandum (PPM), which contains important information about risks, fees, and expenses.
      </p>
      <p>
        Past performance is not indicative of future results. Any historical default rate data referenced on 
        this site pertains to the broader investment-grade trade finance market (source: Asian Development Bank, 
        ICC Trade Register) and does not represent World Bridge Capital's actual default experience. 
        Forward-looking statements are based on assumptions and are subject to change.
      </p>
    </div>
  );
}