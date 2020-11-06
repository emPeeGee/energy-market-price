import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface EnergyData {
  title: string;
  icon: IconDefinition;
  percentage: number;
  price: string;
  info: string;
}
