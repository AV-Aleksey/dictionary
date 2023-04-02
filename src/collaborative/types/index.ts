export type Tag = {
  id: number;
  label: string;
};

export type Word = {
  id: number;
  ru: string;
  eng: string;
  tags?: Tag[];
};
