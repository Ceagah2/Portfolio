import { atom } from 'jotai';

export const secretCodeAtom = atom<boolean>(false);
export const languageAtom = atom<string>('en-us');