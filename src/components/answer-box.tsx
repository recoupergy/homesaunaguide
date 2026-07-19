export function AnswerBox({ label = "Quick answer", children }: { label?: string; children: React.ReactNode }) {
  return (
    <aside className="answer-box" aria-label={label}>
      <span>{label}</span>
      <p>{children}</p>
    </aside>
  );
}
