declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }
  
  export type LucideIcon = ComponentType<LucideProps>;
  
  export const Menu: LucideIcon;
  export const Moon: LucideIcon;
  export const Sun: LucideIcon;
  export const Rss: LucideIcon;
  export const Undo: LucideIcon;
  export const CircleX: LucideIcon;
  export const Shield: LucideIcon;
  export const Check: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Circle: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const MoreHorizontal: LucideIcon;
  export const X: LucideIcon;
}
