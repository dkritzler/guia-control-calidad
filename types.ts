export enum Program {
  LEAN = 'Lean Manufacturing',
  SIX_SIGMA = 'Six Sigma'
}

export enum Category {
  // Shared / System
  ALL = 'Todas',
  
  // Lean Categories
  FLOW = 'Flujo y Eficiencia',
  QUALITY = 'Calidad y Control',
  STRATEGY = 'Estrategia y Mejora',
  ANALYSIS = 'Análisis y Medición',
  WASTE = 'Desperdicios (Muda)',

  // Six Sigma Categories
  FUNDAMENTALS = 'Fundamentos',
  DMAIC = 'Metodología DMAIC',
  STATS_TOOLS = 'Herramientas Estadísticas',
  CAPABILITY = 'Capacidad de Proceso'
}

export type VisualizationType = 'bell-curve' | 'control-chart' | 'pareto' | 'cp-cpk' | 'fishbone';

export interface ExtendedContent {
  deepDefinition: string;
  context: string;
  methodology: string[];
  example: string;
  examTrap?: string; // New: Warning about common exam mistakes
}

export interface StudyCardData {
  id: string;
  program: Program; // New: To filter by program
  title: string;
  emoji: string;
  definition: string;
  keyPoints: string[];
  category: Category;
  extendedContent: ExtendedContent;
  visualization?: VisualizationType; // New: Triggers CSS/SVG visual
}

export interface WasteData {
  name: string;
  desc: string;
  emoji: string;
  details: string;
  consequences: string;
}