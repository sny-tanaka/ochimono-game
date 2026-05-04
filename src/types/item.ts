export type ItemTheme = 'heart' | 'strawberry' | 'cat' | 'special';

export type ItemDefinition = {
  id: number;
  level: number;
  name: string;
  theme: ItemTheme;
  radius: number;
  restitution: number;
  friction: number;
  density: number;
  score: number;
  svgPath: string;
  color: string;
  glowColor: string;
};
