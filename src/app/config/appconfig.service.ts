import { InjectionToken } from '@angular/core';
import { AppConfig } from '../models';
import { environment } from 'src/environments/environment';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  apiUrl: environment.apiUrl,
};
