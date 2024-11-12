import { initializeConnector } from '@web3-react/core';

import { AbstractGlobalWallet } from '@abstract-foundation/web3-react-agw';

export const [agw, hooks] = initializeConnector<AbstractGlobalWallet>(
  actions => new AbstractGlobalWallet({ actions })
);
