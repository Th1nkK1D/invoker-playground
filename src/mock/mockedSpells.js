import Spell from '../classes/Spell/Spell';
import { quas, wex } from './mockedOrbs';

export const emp = new Spell('EMP', [wex, wex, wex], 'empIcon');
export const tornado = new Spell('Tornado', [quas, wex, wex], 'tornadoIcon');
