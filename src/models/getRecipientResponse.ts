/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  dict,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetAutomaticAnticipationResponse,
  getAutomaticAnticipationResponseSchema,
} from './getAutomaticAnticipationResponse';
import {
  GetBankAccountResponse,
  getBankAccountResponseSchema,
} from './getBankAccountResponse';
import {
  GetGatewayRecipientResponse,
  getGatewayRecipientResponseSchema,
} from './getGatewayRecipientResponse';
import {
  GetRegisterInformationResponse,
  getRegisterInformationResponseSchema,
} from './getRegisterInformationResponse';
import {
  GetTransferSettingsResponse,
  getTransferSettingsResponseSchema,
} from './getTransferSettingsResponse';

/** Recipient response */
export interface GetRecipientResponse {
  /** Id */
  id?: string | null;
  /** Name */
  name?: string | null;
  /** Email */
  email?: string | null;
  /** Document */
  document?: string | null;
  /** Description */
  description?: string | null;
  /** Type */
  type?: string | null;
  /** Status */
  status?: string | null;
  /** Creation date */
  createdAt?: string | null;
  /** Last update date */
  updatedAt?: string | null;
  /** Deletion date */
  deletedAt?: string | null;
  /** Default bank account */
  defaultBankAccount?: GetBankAccountResponse | null;
  /** Info about the recipient on the gateway */
  gatewayRecipients?: GetGatewayRecipientResponse[] | null;
  /** Metadata */
  metadata?: Record<string, string> | null;
  automaticAnticipationSettings?: GetAutomaticAnticipationResponse | null;
  transferSettings?: GetTransferSettingsResponse | null;
  /** Recipient code */
  code?: string | null;
  /** Payment mode */
  paymentMode?: string | null;
  registerInformation?: GetRegisterInformationResponse | null;
}

export const getRecipientResponseSchema: Schema<GetRecipientResponse> = object({
  id: ['id', optional(nullable(string()))],
  name: ['name', optional(nullable(string()))],
  email: ['email', optional(nullable(string()))],
  document: ['document', optional(nullable(string()))],
  description: ['description', optional(nullable(string()))],
  type: ['type', optional(nullable(string()))],
  status: ['status', optional(nullable(string()))],
  createdAt: ['created_at', optional(nullable(string()))],
  updatedAt: ['updated_at', optional(nullable(string()))],
  deletedAt: ['deleted_at', optional(nullable(string()))],
  defaultBankAccount: [
    'default_bank_account',
    optional(nullable(lazy(() => getBankAccountResponseSchema))),
  ],
  gatewayRecipients: [
    'gateway_recipients',
    optional(nullable(array(lazy(() => getGatewayRecipientResponseSchema)))),
  ],
  metadata: ['metadata', optional(nullable(dict(string())))],
  automaticAnticipationSettings: [
    'automatic_anticipation_settings',
    optional(nullable(lazy(() => getAutomaticAnticipationResponseSchema))),
  ],
  transferSettings: [
    'transfer_settings',
    optional(nullable(lazy(() => getTransferSettingsResponseSchema))),
  ],
  code: ['code', optional(nullable(string()))],
  paymentMode: ['payment_mode', optional(nullable(string()))],
  registerInformation: [
    'register_information',
    optional(nullable(lazy(() => getRegisterInformationResponseSchema))),
  ],
});
