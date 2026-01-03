import { ModalitySectionShell } from "@/components/landing/ModalitySectionShell";

export function ModalityAudioSection() {
  return (
    <ModalitySectionShell
      id="audio"
      title="Audio modality"
      subtitle="Отдельная раскладка блока (для разнообразия): те же 3 колонки, но на десктопе развернуты относительно visual."
      pills={[
        { key: "waveform", label: "Waveform" },
        { key: "speech", label: "Speech" },
        { key: "music", label: "Music" },
        { key: "events", label: "Audio events" },
      ]}
      layout="right"
    />
  );
}


