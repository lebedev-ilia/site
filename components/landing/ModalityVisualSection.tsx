import { ModalitySectionShell } from "@/components/landing/ModalitySectionShell";

export function ModalityVisualSection() {
  return (
    <ModalitySectionShell
      id="visual"
      title="Visual modality"
      subtitle="Секция под визуальные алгоритмы: превью → кнопки выбора типа → описание. Сейчас это скелет для правильного расположения блоков."
      pills={[
        { key: "scene", label: "Scene" },
        { key: "person", label: "Person" },
        { key: "face", label: "Face" },
        { key: "object", label: "Object" },
        { key: "pose", label: "Pose" },
      ]}
      layout="left"
    />
  );
}


