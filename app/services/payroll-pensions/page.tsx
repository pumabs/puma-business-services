import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payroll & Pensions Services | Puma Business Services",
  description:
    "Payroll setup and processing, RTI submissions, P45s and P60s, workplace pension support and auto enrolment administration. Reliable payroll services from Puma Business Services.",
};

const services = [
  {
    title: "Payroll Setup and Processing",
    body: "We set up and run your payroll from scratch, or take over an existing payroll and manage it going forward. Whether you have one employee or a hundred, we process your payroll accurately every pay period — calculating gross pay, deductions, employer and employee National Insurance, and net pay — and provide payslips for each employee.",
  },
  {
    title: "RTI Submissions",
    body: "Since 2013, employers have been required to submit payroll information to HMRC in real time — on or before each pay day. We handle your Full Payment Submissions (FPS) and Employer Payment Summaries (EPS) each pay period, ensuring HMRC always has accurate, up-to-date information about your employees and their pay.",
  },
  {
    title: "P45s and P60s",
    body: "We produce P45s for leavers promptly when an employee leaves your business, and P60s for all employees still in your employment at 5 April each year. These documents are a legal requirement and must be accurate — we make sure they are correct and issued within the required timescales.",
  },
  {
    title: "Workplace Pension Support",
    body: "Choosing and setting up a workplace pension scheme is one of the first tasks for any new employer. We advise on suitable pension providers, help you understand your obligations as an employer, and assist with the initial setup — making sure your scheme is properly configured before your first auto enrolment duties kick in.",
  },
  {
    title: "Auto Enrolment Administration",
    body: "Auto enrolment requires employers to automatically enrol eligible workers into a qualifying pension scheme and make minimum contributions. The administration involved — assessing workers, enrolling them, managing opt-outs, and re-enrolment every three years — can be complex and time-consuming. We handle the whole process, keeping you compliant with The Pensions Regulator at every stage.",
  },
];

const payrollSteps = [
  {
    step: "1",
    title: "Gather pay information",
    desc: "Hours worked, salary changes, bonuses, expenses, and any other pay elements for the period.",
  },
  {
    step: "2",
    title: "Calculate pay and deductions",
    desc: "Gross pay, income tax under PAYE, employee and employer National Insurance, pension contributions.",
  },
  {
    step: "3",
    title: "Produce payslips",
    desc: "Clear, accurate payslips for every employee showing their gross pay, deductions, and net pay.",
  },
  {
    step: "4",
    title: "Submit RTI to HMRC",
    desc: "Full Payment Submission sent to HMRC on or before pay day, every pay period.",
  },
  {
    step: "5",
    title: "Process pension contributions",
    desc: "Pension deductions calculated and submitted to your pension provider each pay period.",
  },
  {
    step: "6",
    title: "PAYE payment summary",
    desc: "Clear summary of what you owe HMRC each month so you know exactly what to pay and when.",
  },
];

const reasons = [
  "Payroll processed accurately on time, every pay period",
  "RTI submissions handled as standard",
  "Full auto enrolment and pension compliance",
  "P45s and P60s produced promptly",
  "Suitable for businesses with one employee upward",
  "Fixed monthly fee — no per-employee surprises",
];

export default function PayrollPensionsPage() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-3">
              Payroll &amp; Pensions
            </h1>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              Getting payroll wrong affects your employees and exposes your
              business to HMRC penalties. We run your payroll accurately and
              on time, every pay period — so your team gets paid correctly and
              you stay compliant without lifting a finger.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="border border-white hover:border-brand-gold hover:text-brand-gold transition-colors text-white font-medium px-6 py-3 rounded-md"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-4 sm:grid-cols-3 text-center">
          {[
            { stat: "RTI", label: "Real Time Submissions Every Pay Day" },
            { stat: "Auto", label: "Enrolment Fully Managed" },
            { stat: "Fixed", label: "Monthly Fee Per Payroll" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-brand-red">{item.stat}</p>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services detail */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
            What&apos;s Included
          </p>
          <h2 className="text-3xl font-bold text-brand-navy mt-2">
            Everything We Cover
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            From initial payroll setup through to ongoing processing, pension
            administration, and year-end compliance — here&apos;s what our
            payroll and pensions service includes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-brand-red transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-7 bg-brand-red rounded flex-shrink-0" />
                <h3 className="text-lg font-semibold text-brand-navy">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              The Process
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              How We Run Your Payroll
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Every pay period, we follow the same rigorous process to make
              sure your payroll is accurate, compliant, and submitted on time.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {payrollSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-semibold text-brand-navy">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              Why Puma?
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              Payroll You Can Rely On
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Payroll errors have real consequences — employees paid incorrectly,
              HMRC queries, and penalties for late or inaccurate RTI submissions.
              We take payroll seriously, treating every pay run with the same
              care regardless of how many employees you have.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We also stay on top of the annual changes that affect payroll —
              National Minimum Wage uplifts, National Insurance threshold
              changes, and pension contribution increases — so your payroll
              is always up to date without you having to track it yourself.
            </p>
            <ul className="mt-6 space-y-3">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-center gap-3 text-gray-700 text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-navy rounded-2xl p-8 text-white">
            <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
              Good to Know
            </p>
            <h3 className="text-xl font-bold mt-3">
              Key Payroll Dates
            </h3>
            <ul className="mt-6 space-y-5 text-sm text-gray-300">
              {[
                {
                  event: "RTI Full Payment Submission",
                  detail: "On or before each pay day, every pay period",
                },
                {
                  event: "PAYE payment to HMRC",
                  detail:
                    "22nd of the following month (electronic) or 19th (by post)",
                },
                {
                  event: "P60 issued to employees",
                  detail: "By 31 May following the end of the tax year",
                },
                {
                  event: "P11D expenses and benefits",
                  detail: "Filed with HMRC by 6 July following the tax year",
                },
                {
                  event: "Auto enrolment re-enrolment",
                  detail:
                    "Every 3 years — employees who opted out must be re-enrolled",
                },
              ].map((item) => (
                <li key={item.event} className="flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                  <span>
                    <span className="text-white font-medium">{item.event}</span>{" "}
                    — {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              Common Questions
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              Payroll &amp; Pensions FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "When do I need to start a payroll?",
                a: "You need to register as an employer and set up a payroll before you make your first payment to an employee or director. You must register with HMRC before the first pay day, and you must submit an RTI return on or before that first payment. We handle the registration and setup process and make sure everything is in place before you need to pay anyone.",
              },
              {
                q: "Do I need to auto-enrol my employees into a pension?",
                a: "If you employ anyone aged between 22 and State Pension age who earns more than £10,000 per year, you are legally required to automatically enrol them into a qualifying workplace pension scheme and make minimum contributions. Even if you have only one employee, these rules apply. The Pensions Regulator actively enforces compliance and issues fixed penalty notices for non-compliance.",
              },
              {
                q: "What is the minimum pension contribution?",
                a: "The minimum total contribution is 8% of qualifying earnings, of which at least 3% must come from you as the employer. The remaining 5% comes from the employee, though this is reduced slightly by tax relief at source depending on how your scheme is set up. We make sure your contributions meet the minimum requirements and are processed correctly each pay period.",
              },
              {
                q: "Can you take over our existing payroll?",
                a: "Yes — we take over existing payrolls regularly. We will need your existing payroll records, employee details, and PAYE reference. If there are any errors or inconsistencies in your current payroll, we will identify and correct them before taking over ongoing processing.",
              },
              {
                q: "What happens at the end of the tax year for payroll?",
                a: "At the end of each tax year (5 April), we complete your year-end payroll process — submitting the final Full Payment Submission marked as the last of the year, producing P60s for all employees by 31 May, and flagging any P11D requirements for benefits in kind. We manage the whole process so nothing gets missed.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-xl p-6 bg-white"
              >
                <h3 className="font-semibold text-brand-navy">{faq.q}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            Want payroll taken off your plate?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Get in touch for a free conversation about your payroll needs.
            We&apos;ll give you a fixed monthly price and take it from there.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link
              href="/contact"
              className="bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="border border-white hover:border-brand-gold hover:text-brand-gold transition-colors text-white font-medium px-6 py-3 rounded-md"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}