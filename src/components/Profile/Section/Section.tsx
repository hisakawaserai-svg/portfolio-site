import React from 'react';

import { useInView } from "react-intersection-observer";

type SectionProps = {
  id: string;
  onInView: (id: string, inView: boolean) => void;
  children: React.ReactNode;
  className?: string
}

export default function Section({id, onInView, children, className}: SectionProps) {
  const { ref } = useInView({
    threshold: 0,
    rootMargin: "-40% 0px",
    onChange(inView) {
      if(inView) {
        onInView(id, true);
      } else {
        onInView(id, false);
      }
    },
  });

  return(
    <section id={id} className={className}>
      <div ref={ref}>
        {children}
      </div>
    </section>
  )
}