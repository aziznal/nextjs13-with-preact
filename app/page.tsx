"use client";

import { computed, signal } from "@preact/signals";

const counter = signal(0);

export default function Home() {
  const doubledCounter = computed(() => counter.value * 2); 

  return (
    <div>
      <button
        onClick={() => {
          counter.value = counter.value + 1;
        }}
      >
        {doubledCounter.value}
      </button>
    </div>
  );
}
