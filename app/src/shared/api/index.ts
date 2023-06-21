import axios, { Method } from 'axios';

import { log } from 'shared/lib';

interface ServerError {
  code?: string;
  error?: string;
  message?: string;
  status?: number;
}

export interface ApiRequestState<D = Record<string, unknown>> {
  isLoading: boolean;
  error: string | number | null;
  success: boolean | null;
  data: D | null | unknown;
}

interface ApiRequestOptions<D> {
  method?: Method;
  url?: string;
  data?: D;
  params?: D;
  debug?: boolean;
}

export const apiRequest = async <D = Record<string, unknown>>({ debug = false, ...props }: ApiRequestOptions<D>) => {
  try {
    const { method = 'post', ...options } = props;
    const response = await axios({ method, ...options });

    if (debug) {
      log(response);
    }

    return response.data;
  } catch (err) {
    if (debug) {
      log(err);
    }

    let errorMessage;

    if (axios.isAxiosError(err)) {
      const serverError = err.response?.data as ServerError;
      errorMessage =
        serverError?.code || serverError?.error || serverError?.message || err.response?.status || err.message;
    } else {
      errorMessage = (err as Error).message;
    }

    throw errorMessage;
  }
};
