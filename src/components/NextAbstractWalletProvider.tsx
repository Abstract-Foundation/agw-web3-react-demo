'use client';

import { Web3ReactProvider, Web3ReactHooks } from '@web3-react/core';
import { AbstractGlobalWallet } from '@abstract-foundation/web3-react-agw';
import { agw, hooks } from '../connectors/agw';

const connectors: [AbstractGlobalWallet, Web3ReactHooks][] = [[agw, hooks]];

export default function AbstractWalletWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Web3ReactProvider connectors={connectors} lookupENS={false}>
      {children}
    </Web3ReactProvider>
  );
}
