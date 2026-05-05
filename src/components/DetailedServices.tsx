
import React from 'react';
import { Timeline } from './ui/timeline';
import { motion } from 'framer-motion';

const DetailedServices: React.FC = () => {
  const timelineData = [
    {
      title: "Positioning review",
      content: (
        <motion.div
          className="text-charcoal font-roboto"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-roboto">
            Most start-ups do not have a visibility problem. They have a clarity problem. We work with founders to sharpen the company narrative, define the market context and turn complex products into stories journalists, customers and investors can understand.
          </p>
          <div className="mb-6">
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              — Company positioning and messaging
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — Founder narrative
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              — Market and category framing
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Founder Profiles",
      content: (
        <motion.div
          className="text-charcoal font-roboto"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-roboto">
            Founder visibility works when it is tied to substance. We help founders develop sharp points of view, write clearly about their category and build a public record through interviews, commentary, op-eds and owned content.
          </p>
          <div className="mb-6">
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              — Founder profiles
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — Op-eds and commentary
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              — Website and narrative copy
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Media Relations",
      content: (
        <motion.div
          className="text-charcoal font-roboto"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-roboto">
            Funding rounds, launches and senior hires are triggers, not stories. We find the angle underneath the announcement, then pitch it to the journalists and publications that shape the category.
          </p>
          <div className="mb-6">
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              — Funding and launch announcements
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — Tier-one and trade media outreach
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              — Journalist briefings
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Reputation management",
      content: (
        <motion.div
          className="text-charcoal font-roboto"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-roboto">
            As companies grow, visibility creates pressure. We help founders communicate clearly during moments of scrutiny, change or momentum, protecting trust with customers, investors, employees and the media.
          </p>
          <div className="mb-6">
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              — Reputation counsel
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — Sensitive announcements
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              — Message discipline
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "LLM Visibility",
      content: (
        <motion.div
          className="text-charcoal font-roboto"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-charcoal text-sm md:text-base font-light mb-4 font-roboto">
            LLMs answer questions about companies and categories by drawing on trusted public sources. Media coverage, founder interviews, analyst references and repeated category language all help define how a company is understood and surfaced.
          </p>
          <div className="mb-6">
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              — Trusted public references
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm mb-2 uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — Clear category language
            </motion.div>
            <motion.div
              className="flex gap-2 items-center text-charcoal font-roboto text-sm uppercase"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              — Founder commentary
            </motion.div>
          </div>
        </motion.div>
      ),
    }
  ];

  return (
    <div className="bg-offwhite overflow-hidden">
      <Timeline data={timelineData} />
    </div>
  );
};

export default DetailedServices;
