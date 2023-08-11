import api from '@api/edenai'

import type {
  TextModerationCreateBodyParam,
  TextModerationCreateResponse200,
} from '@api/edenai/types'
import { ResultAsync, err, ok } from 'neverthrow'

export default class Client {
  constructor(token: string) {
    api.auth(token)
  }

  public textModeration(
    params: TextModerationCreateBodyParam,
  ): ResultAsync<TextModerationResult, Error> {
    return ResultAsync.fromPromise(
      api.text_moderation_create(params),
      (originalError) => new Error('issue', { cause: originalError }),
    ).andThen((response) => {
      if (response.status !== 200) err(response.data)
      return ok(response.data)
    })
  }
}

export class TextModerationError extends Error {}

export type TextModerationResult = TextModerationCreateResponse200
