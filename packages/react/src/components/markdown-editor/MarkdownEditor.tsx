export interface MarkdownEditorProps {
  editable: boolean
}

export function MarkdownEditor(props: MarkdownEditorProps) {
  return (
    <article className="flex flex-row flex-nowrap w-full">
      {props.editable && <section id="markdown" className="flex-1 max-w-1/2">
        Markdown!!!
      </section>}
      <section id="render" className="flex-1 max-w-1/2">
        Render!!!
      </section>
    </article>
  );
}
