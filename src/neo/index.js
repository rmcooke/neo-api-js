export { antChain } from './eco/services/antChain';
export { antChainXyz } from './eco/services/antChainXyz';
export { neon } from './eco/services/neon';
export { node } from './services/node/index.js';
export { rest } from './services/rest.js';
export { registry } from './registry.js';
export { service } from './services/service.js';

import { registerProtocolClient } from './registry.js';

import { axiosClient } from './protocols/axios.http.js';

registerProtocolClient(axiosClient);
