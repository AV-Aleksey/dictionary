export type DataBaseChannels =
  | 'db_create_word'
  | 'db_get_words'
  | 'db_delete_words';

export type CreateWordPayload = { ru: string; eng: string };

export type DeleteWordPayload = number[];
