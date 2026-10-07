import type { HttpTrafficExchangeEngine }               from './infrastructure/httpTraffic/engine/httpTraffic';
import      { initializeHomeRoutes }                    from './api/home/routes';

export function configureApiRoutes(engine: HttpTrafficExchangeEngine): void {
  initializeHomeRoutes(engine);
  
}
