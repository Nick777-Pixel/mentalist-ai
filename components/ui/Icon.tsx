import {
  Circle,
  FlagTriangleRight,
  CircleDot,
  LucideIcon,
  X,
  Wand,
} from 'lucide-react';

type IconComponentProps = { name: string; [x: string]: any };
type IconTypes = { [name: string]: LucideIcon };

const iconTypes: IconTypes = {
  circle: Circle,
  triangle: FlagTriangleRight,
  circleDot: CircleDot,
  close: X,
  want: Wand,
};

const IconComponent = ({ name, ...props }: IconComponentProps) => {
  let Icon = iconTypes[name];

  return <Icon {...props} />;
};

export default IconComponent;
