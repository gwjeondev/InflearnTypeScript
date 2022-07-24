import { PhoneNumberDictionary } from './PhoneNumberDictionary';

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}
