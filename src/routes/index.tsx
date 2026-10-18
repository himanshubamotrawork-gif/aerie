import { createFileRoute } from "@tanstack/react-router";
import { Gift, ListChecks, MousePointerClick, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import aerieLogo from "@/assets/aerie-logo.jpg";

const CLAIM_URL = "https://giftclick.org/aff_c?offer_id=3893&aff_id=17763";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$500 Aerie Giftcard — Offer Preview" },
      { name: "description", content: "Explore a recreation of the Aerie gift-card offer page, including the offer steps and frequently asked questions. Independent design preview." },
      { property: "og:title", content: "$500 Aerie Giftcard — Offer Preview" },
      { property: "og:description", content: "Aerie gift-card offer page design preview with offer steps and frequently asked questions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { icon: MousePointerClick, title: "Click the Button Below", description: "Start by clicking the claim button to begin." },
  { icon: ListChecks, title: "Complete Required Offers", description: "Finish the required deals to unlock your reward." },
  { icon: Gift, title: "Claim your $500 Aerie Gift Card", description: "Once completed, claim your Aerie gift card reward." },
];
const questions = [
  { question: "Does it only work for students?", answer: "No, it's available worldwide — anyone, anywhere can claim this offer." },
  { question: "How long does it take to receive my gift card?", answer: "After completing all required tasks, allow 3-5 business days for gift card delivery." },
  { question: "What kind of tasks do I need to complete?", answer: "Tasks typically include signing up for partner services, playing games, completing surveys, and trying out new apps." },
  { question: "Can I claim the reward multiple times?", answer: "Yes! You can repeat the process and claim rewards multiple times." },
];

function ClaimButton() {
  return (
    <Button variant="claim" asChild>
      <a href={CLAIM_URL} target="_blank" rel="noopener noreferrer sponsored">Claim Now</a>
    </Button>
  );
}

function Index() {
  return (
    <main className="reward-page">
      <header className="offer-header">
        <img className="brand-logo" src={aerieLogo} alt="Aerie" width={112} height={112} />
        <h1 className="offer-title">$500 Aerie Giftcard</h1>
        <p className="offer-description">Discover comfy bras, undies, loungewear and activewear made for every body.</p>
        <ClaimButton />
      </header>

      <section aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="section-title">How It Works</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="step-icon" aria-hidden="true"><step.icon strokeWidth={1.8} /></span>
              <div>
                <div className="step-label">STEP {index + 1}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="qualification">To qualify for your Aerie gift card, complete the required deal from start to finish to unlock the full $500 reward. Once successfully completed, you'll be eligible to claim your reward.</p>
        <div className="rating-block" aria-label="Reference page displays a rating of 4.5 out of 5; unverified">
          <div className="rating-stars" aria-hidden="true">
            {[0, 1, 2, 3].map((star) => <Star key={star} />)}<Star className="half-star" />
          </div>
          <div className="rating-line"><strong>4.5 / 5</strong><span className="rating-on">on</span><span className="rating-brand">★ Trustpilot</span></div>
        </div>
        <ClaimButton />
      </section>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible defaultValue="faq-0" className="faq-list">
          {questions.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="faq-item">
              <AccordionTrigger className="faq-trigger">{faq.question}</AccordionTrigger>
              <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <footer className="replica-disclosure">Independent design preview. Not affiliated with Aerie or Trustpilot. Offer terms, eligibility, delivery times, and rating shown are reproduced from the reference and are not verified. The Claim Now buttons open a third-party offer link in a new tab; this page may earn a commission from that link.</footer>
    </main>
  );
}
