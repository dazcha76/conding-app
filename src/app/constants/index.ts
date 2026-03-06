import { DART_DATA } from './dart';
import { JAVASCRIPT_DATA } from './javascript';

export type ProgrammingLanguage = 'dart' | 'javascript';

export const LANGUAGE_DATA: Record<ProgrammingLanguage, typeof DART_DATA> = {
  dart: DART_DATA,
  javascript: JAVASCRIPT_DATA,
};
