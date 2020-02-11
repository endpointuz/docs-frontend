import { createAction } from 'redux-actions';
import axios from 'axios';

export const setStep = createAction('STEP_SET');

export const setActiveLanguage = createAction('ACTIVE_LANGUAGE_SET');
