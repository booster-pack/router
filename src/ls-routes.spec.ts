import { lsRoutes } from '../src/ls-routes';
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
} = require('../fixtures/main.1.bundle.js');

describe('lsRoutes', () => {
  let MOCK_BUNDLE;
  let MOCK_FACTORY;
  beforeEach(() => {
    MOCK_FACTORY = AppServerModuleNgFactory;
    MOCK_BUNDLE = LAZY_MODULE_MAP;
  });

  it('should have a mock bundle', () => {
    expect(MOCK_BUNDLE).toBeTruthy();
  });

  it('should evaulate routes of bundle', async () => {
    const routes = await lsRoutes(
      'flatPaths',
      AppServerModuleNgFactory,
      LAZY_MODULE_MAP
    );

    expect(routes).toEqual(['/about']);
  });
});
