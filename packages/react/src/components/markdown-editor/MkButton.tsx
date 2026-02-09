import { Svg, type SvgName } from "./MkSvg";

export interface MkButtonProps {
  text: string;
  icon: SvgName;
}

export function MkButton({ text, icon }: MkButtonProps) {
  return (
    <button title={text} className="p-1 size-8 cursor-pointer">
      <Svg name={icon} />
    </button>
  );
}
