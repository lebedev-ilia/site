import { ModalitySectionShell } from "@/components/landing/ModalitySectionShell";

export function ModalityTextSection() {
  return (
    <ModalitySectionShell
      id="text"
      title="Text modality"
      subtitle="Каркас для текстовых моделей и LLM-разбора. На этом этапе — только сетка, панели и отступы."
      pills={[
        { key: "sentiment", label: "Sentiment" },
        { key: "topics", label: "Topics" },
        { key: "safety", label: "Safety" },
        { key: "summary", label: "Summary" },
      ]}
      layout="left"
    />
  );
}


