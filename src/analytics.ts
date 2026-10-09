import ReactGA from 'react-ga4';

/**
 * Google Analytics 4. The measurement ID comes from the environment, so it is
 * never hard-coded here: put it in `.env.production` as
 *
 *   REACT_APP_GA_ID=G-XXXXXXXXXX
 *
 * (CRA only exposes variables that start with REACT_APP_.) Without a valid ID
 * this does nothing, so local development and unconfigured builds send no data.
 *
 * The GA script loads when the browser is idle, so it never delays the first
 * paint or hurts the Lighthouse score.
 */
const GA_ID = process.env.REACT_APP_GA_ID ?? '';
const looksValid = /^G-[A-Z0-9]{6,}$/.test(GA_ID) && GA_ID !== 'G-XXXXXXXXXX';

export function initAnalytics(): void {
      if (process.env.NODE_ENV !== 'production' || !looksValid) return;

      const start = (): void => {
            ReactGA.initialize(GA_ID);
            ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
      };

      if (typeof window.requestIdleCallback === 'function') {
            window.requestIdleCallback(start, { timeout: 4000 });
      } else {
            window.setTimeout(start, 2000);
      }
}
