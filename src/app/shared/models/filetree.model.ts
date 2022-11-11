import { ProtocolViewModel } from "../../pages/overview/protocol.model";

export interface FiletreeViewModel {
  schoolYears?: Array<SchoolYearViewModel>;
}

export interface SchoolYearViewModel {
  year?: number;
  conferenceTypes?: Array<ConferenceTypeViewModel>;
}

export interface ConferenceTypeViewModel {
  name: string;
  protocols: Array<ProtocolViewModel>;
}
