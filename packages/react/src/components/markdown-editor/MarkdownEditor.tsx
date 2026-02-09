import { MkButton } from "./MkButton";
import { MkToolbarSeparator } from "./MkToolbarSeparator";

export interface MarkdownEditorProps {
  editable: boolean
}

export function MarkdownEditor(props: MarkdownEditorProps) {
  return (
    <article className="flex flex-row flex-nowrap w-full">
      {props.editable && <section id="markdown" className="flex-1 max-w-1/2">
        <div id="toolbar" className="flex flex-row">
          <MkButton text="Heading 1" icon="h1" />
          <MkButton text="Heading 2" icon="h2" />
          <MkButton text="Heading 3" icon="h3" />
          <MkButton text="Heading 4" icon="h4" />
          <MkButton text="Heading 5" icon="h5" />
          <MkButton text="Heading 6" icon="h6" />
          <MkButton text="Text" icon="text" />
          <MkButton text="Bulleted List" icon="format_list_bulleted" />
          <MkButton text="Numbered List" icon="format_list_numbered" />
          <MkButton text="Quote" icon="format_quote" />

          <MkToolbarSeparator />

          <MkButton text="Bold" icon="format_bold" />
          <MkButton text="Italic" icon="format_italic" />
          <MkButton text="Underline" icon="format_underlined" />

          <MkToolbarSeparator />

          <MkButton text="Decrease Indent" icon="format_intent_decrease" />
          <MkButton text="Increase Indent" icon="format_indent_increase" />
        </div>
        <div>Markdown!!!</div>
      </section>}
      <section id="render" className="flex-1 max-w-1/2">
        Render!!!
      </section>
    </article>
  );
}
