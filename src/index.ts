import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'GRNHBuTgiEjG9DVezqwaiuceKYFp6S8yBiuvxDWPTWxb'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  'VT9JD1qSywk1njAyooD7qUqLy2oG191oiTddPhnFLGS'
);
