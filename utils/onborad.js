import Onboard from "bnc-onboard";
import { onBoardOptions } from "../dapp.config";

export const initOnBoard = (subscriptions) => {
  return Onboard({
    subscriptions,
    ...onBoardOptions,
  });
};
