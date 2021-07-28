import { resource } from "lib/resax";

import {
  getWalletStatus,
  isWalletHasSeedPhrase,
  onWalletStatusUpdated,
} from "core/client";

export const walletStatusRes = resource(getWalletStatus, {
  preload: true,
  onMount: (r) =>
    onWalletStatusUpdated((newWalletStatus) => r.put(newWalletStatus)),
});

export const hasSeedPhraseRes = resource(isWalletHasSeedPhrase);