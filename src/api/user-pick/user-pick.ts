/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Leg User API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/react-query';
import type {
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  UseInfiniteQueryResult,
  QueryKey,
} from '@tanstack/react-query';
import type { CursorPickSimple, GetPicksParams, AddPickParams, RemovePickParams } from '.././types';
import { axiosInstance } from '../../../axios-instance';
import type { ErrorType } from '../../../axios-instance';

/**
 * @summary 유저 Picks 조회
 */
export const getPicks = (params?: GetPicksParams, signal?: AbortSignal) => {
  return axiosInstance<CursorPickSimple>({ url: `/picks`, method: 'get', params, signal });
};

export const getGetPicksQueryKey = (params?: GetPicksParams) => [`/picks`, ...(params ? [params] : [])];

export type GetPicksInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getPicks>>>;
export type GetPicksInfiniteQueryError = ErrorType<unknown>;

export const useGetPicksInfinite = <TData = Awaited<ReturnType<typeof getPicks>>, TError = ErrorType<unknown>>(
  params?: GetPicksParams,
  options?: { query?: UseInfiniteQueryOptions<Awaited<ReturnType<typeof getPicks>>, TError, TData> },
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPicksQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPicks>>> = ({ signal }) => getPicks(params, signal);

  const query = useInfiniteQuery<Awaited<ReturnType<typeof getPicks>>, TError, TData>({
    queryKey,
    queryFn,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export type GetPicksQueryResult = NonNullable<Awaited<ReturnType<typeof getPicks>>>;
export type GetPicksQueryError = ErrorType<unknown>;

export const useGetPicks = <TData = Awaited<ReturnType<typeof getPicks>>, TError = ErrorType<unknown>>(
  params?: GetPicksParams,
  options?: { query?: UseQueryOptions<Awaited<ReturnType<typeof getPicks>>, TError, TData> },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPicksQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPicks>>> = ({ signal }) => getPicks(params, signal);

  const query = useQuery<Awaited<ReturnType<typeof getPicks>>, TError, TData>({
    queryKey,
    queryFn,
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

/**
 * @summary 유저 가게 글 Pick
 */
export const addPick = (params: AddPickParams) => {
  return axiosInstance<boolean>({ url: `/picks`, method: 'post', params });
};

export type AddPickMutationResult = NonNullable<Awaited<ReturnType<typeof addPick>>>;

export type AddPickMutationError = ErrorType<unknown>;

export const useAddPick = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof addPick>>, TError, { params: AddPickParams }, TContext>;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof addPick>>, { params: AddPickParams }> = props => {
    const { params } = props ?? {};

    return addPick(params);
  };

  return useMutation<Awaited<ReturnType<typeof addPick>>, TError, { params: AddPickParams }, TContext>(
    mutationFn,
    mutationOptions,
  );
};
/**
 * @summary 유저 가게 글 Pick 해제
 */
export const removePick = (params: RemovePickParams) => {
  return axiosInstance<boolean>({ url: `/picks`, method: 'delete', params });
};

export type RemovePickMutationResult = NonNullable<Awaited<ReturnType<typeof removePick>>>;

export type RemovePickMutationError = ErrorType<unknown>;

export const useRemovePick = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof removePick>>, TError, { params: RemovePickParams }, TContext>;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof removePick>>, { params: RemovePickParams }> = props => {
    const { params } = props ?? {};

    return removePick(params);
  };

  return useMutation<Awaited<ReturnType<typeof removePick>>, TError, { params: RemovePickParams }, TContext>(
    mutationFn,
    mutationOptions,
  );
};
