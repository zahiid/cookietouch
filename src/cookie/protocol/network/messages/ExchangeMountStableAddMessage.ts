import MountClientData from "@protocol/network/types/MountClientData";
import Message from "./Message";

export default class ExchangeMountStableAddMessage extends Message {
  public mountDescription: MountClientData;

  constructor(mountDescription: MountClientData) {
    super();
    this.mountDescription = mountDescription;

  }
}
