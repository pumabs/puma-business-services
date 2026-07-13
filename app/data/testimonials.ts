export type Testimonial = {
  name: string;
  company?: string;
  role?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    company: "Mitchell Design Studio",
    role: "Sole Trader",
    quote: "Switching to Puma was the best decision I made for my business. Daniel explained everything clearly and I finally feel on top of my finances.",
  },
  {
    name: "James Thornton",
    company: "Thornton Electrical Ltd",
    role: "Director",
    quote: "Reliable, responsive, and genuinely helpful. Our previous accountant took weeks to reply, Puma gets back to us the same day.",
  },
  {
    name: "Rachel Owens",
    role: "Freelance Consultant",
    quote: "I was nervous about self-assessment but Puma made the whole process painless. Highly recommended for anyone who finds tax confusing.",
  },
];