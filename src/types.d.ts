export interface ProductProps {
    id?: number;
    name: string;
    price: number;
    image: string;
    store: string;
    size?: string;
    groupset?: groupset;
    shimano?: shimano;
    sram?: sram;
    campagnolo?: campagnolo;
    weight?: number;
  }
  
 export type size = 'XL' | 'L' | 'M' | 'S' | 'XS';
 export type groupset = 'Shimano' | 'Sram' | 'Campagnolo';
 export type shimano = 'DURA-ACE Di2' | 'DURA ACE' | 'ULTEGRA Di2' | 'ULTEGRA' | '105' | 'TIAGRA' | 'SORA' | 'CLARIS';
 export type sram = 'RED eTap AXS' | 'RED eTap' | 'RED' | 'FORCE eTap AXS' | 'FORCE eTap' | 'FORCE' | 'RIVAL' | 'APEX';
 export type campagnolo = 'Super Record' | 'Record' | 'Chorus' | 'Potenza' | 'Veloce';
  
  