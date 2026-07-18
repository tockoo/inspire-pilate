"use client";

import { useState } from "react";
import type { FaqItem } from "@/types";
import { IconChevronDown } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/**
 * Accordéon FAQ accessible (aria-expanded / région contrôlée).
 */
export function Accordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-umber/12 border-y border-umber/12">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-button-${item.id}`}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-serif text-lg text-umber md:text-xl">
                  {item.question}
                </span>
                <IconChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-clay transition-transform duration-500 ease-soft",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-button-${item.id}`}
              hidden={!isOpen}
              className="pb-6 pr-8"
            >
              <p className="text-ink/70 leading-relaxed">{item.answer}</p>
              {item.provisional && (
                <p className="mt-2 text-xs italic text-clay/80">
                  Réponse provisoire — à confirmer par le studio.
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
