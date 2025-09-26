import React from "react";
import clsx from "clsx";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("py-8", className)}>
      <div className="container-nice">
        {(title || subtitle) && (
          <header className="mb-10 text-center">
            {subtitle && (
              <h3 className="text-sm uppercase tracking-wide text-brand-600">
                {subtitle}
              </h3>
            )}
            {title && (
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
