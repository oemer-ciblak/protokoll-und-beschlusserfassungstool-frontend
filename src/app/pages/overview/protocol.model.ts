import { ParticipantViewModel } from "../../shared/models/participant.model";

export interface ProtocolViewModel {
  id:               number;
  title:            string;
  description:      string;
  status:           string;
  creationDate:     Date | null;
  doneDate:         Date | null;
  agendaItems:      Array<AgendaItemViewModel>;
  author:           string;
  participants:     Array<ParticipantViewModel>;
  conferenceType?:  string;
  schoolYearBeginn?: number;
  leader?:          string;
  room?:            string;
  meetingStart?:    string;
  meetingEnd?:      string;
}

export interface AgendaItemViewModel {
  id?:          number;
  title?:       string;
  notes?:       string;
  decision?:    string;
}

export enum ConferenceTypeEnum {
  Lehrerkonferenz = 0,
  Abteilungskonferenz = 1,
}

export interface ProtocolCreateViewModel {
  id?:               number;
  title?:            string;
  description?:      string;
  status?:           string;
  creationDate?:     Date | null;
  doneDate?:         Date | null;
  agendaItems?:      Array<AgendaItemViewModel>;
  author?:           string;
  participants?:     Array<ParticipantViewModel>;
  conferenceType?:  string;
  schoolYearBeginn?: number;
  leader?:          string;
  room?:            string;
  meetingStart?:    string;
  meetingEnd?:      string;
}

export interface ProtocolUpdateViewModel {
  id?:               number;
  title?:            string;
  description?:      string;
  agendaItems?:      Array<AgendaItemViewModel>;
  author?:           string;
  conferenceType?:  string;
  schoolYearBeginn?: number;
  leader?:          string;
  room?:            string;
  meetingStart?:    string;
  meetingEnd?:      string;
  participants?:    Array<ParticipantViewModel>;
}
