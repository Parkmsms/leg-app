/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Leg User API
 * OpenAPI spec version: 1.0.0
 */
import { useMutation } from '@tanstack/react-query';
import type { UseMutationOptions, MutationFunction } from '@tanstack/react-query';
import type { JwtTokenDto, SmsAuthCode, PhoneDto, ValidUserReq, UserLoginReq, StoreLoginReq } from '.././types';
import { axiosInstance } from '../../../axios-instance';
import type { ErrorType } from '../../../axios-instance';

/**
 * 요청에 403300 에러 발생시 리프레쉬 토큰을 검증하고, 액세스 토큰 재발급 (이것도 403300 발생시 로그인 필요)
 * @summary 토큰 재발급
 */
export const reissueAccessToken = (jwtTokenDto: JwtTokenDto) => {
  return axiosInstance<JwtTokenDto>({
    url: `/auth/reissue`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: jwtTokenDto,
  });
};

export type ReissueAccessTokenMutationResult = NonNullable<Awaited<ReturnType<typeof reissueAccessToken>>>;
export type ReissueAccessTokenMutationBody = JwtTokenDto;
export type ReissueAccessTokenMutationError = ErrorType<unknown>;

export const useReissueAccessToken = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof reissueAccessToken>>,
    TError,
    { data: JwtTokenDto },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof reissueAccessToken>>, { data: JwtTokenDto }> = props => {
    const { data } = props ?? {};

    return reissueAccessToken(data);
  };

  return useMutation<Awaited<ReturnType<typeof reissueAccessToken>>, TError, { data: JwtTokenDto }, TContext>(
    mutationFn,
    mutationOptions,
  );
};
/**
 * @summary 휴대폰 인증번호 발송
 */
export const validPhone = (phoneDto: PhoneDto) => {
  return axiosInstance<SmsAuthCode>({
    url: `/auth/phone`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: phoneDto,
  });
};

export type ValidPhoneMutationResult = NonNullable<Awaited<ReturnType<typeof validPhone>>>;
export type ValidPhoneMutationBody = PhoneDto;
export type ValidPhoneMutationError = ErrorType<unknown>;

export const useValidPhone = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof validPhone>>, TError, { data: PhoneDto }, TContext>;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof validPhone>>, { data: PhoneDto }> = props => {
    const { data } = props ?? {};

    return validPhone(data);
  };

  return useMutation<Awaited<ReturnType<typeof validPhone>>, TError, { data: PhoneDto }, TContext>(
    mutationFn,
    mutationOptions,
  );
};
/**
 * 해당 휴대폰 번호로 가입된 유저의 닉네임이 입력한 값과 같은지 확인 (true : 닉네임이 일치)
 * @summary [USER] 닉네임 검증
 */
export const validUserByNickname = (validUserReq: ValidUserReq) => {
  return axiosInstance<boolean>({
    url: `/auth/nickname`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: validUserReq,
  });
};

export type ValidUserByNicknameMutationResult = NonNullable<Awaited<ReturnType<typeof validUserByNickname>>>;
export type ValidUserByNicknameMutationBody = ValidUserReq;
export type ValidUserByNicknameMutationError = ErrorType<unknown>;

export const useValidUserByNickname = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof validUserByNickname>>,
    TError,
    { data: ValidUserReq },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof validUserByNickname>>,
    { data: ValidUserReq }
  > = props => {
    const { data } = props ?? {};

    return validUserByNickname(data);
  };

  return useMutation<Awaited<ReturnType<typeof validUserByNickname>>, TError, { data: ValidUserReq }, TContext>(
    mutationFn,
    mutationOptions,
  );
};
/**
 * @summary [USER] 사용자 로그인
 */
export const loginUser = (userLoginReq: UserLoginReq) => {
  return axiosInstance<JwtTokenDto>({
    url: `/auth/login/user`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: userLoginReq,
  });
};

export type LoginUserMutationResult = NonNullable<Awaited<ReturnType<typeof loginUser>>>;
export type LoginUserMutationBody = UserLoginReq;
export type LoginUserMutationError = ErrorType<unknown>;

export const useLoginUser = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof loginUser>>, TError, { data: UserLoginReq }, TContext>;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof loginUser>>, { data: UserLoginReq }> = props => {
    const { data } = props ?? {};

    return loginUser(data);
  };

  return useMutation<Awaited<ReturnType<typeof loginUser>>, TError, { data: UserLoginReq }, TContext>(
    mutationFn,
    mutationOptions,
  );
};
/**
 * 가게 직원 소유의 디바이스 토큰 검증 -> 실패시 휴대폰 인증 + 해당 휴대폰 번호를 가진 직원의 디바이스 토큰 변경
 * @summary [STORE] 가게 로그인
 */
export const loginStore = (storeLoginReq: StoreLoginReq) => {
  return axiosInstance<JwtTokenDto>({
    url: `/auth/login/store`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: storeLoginReq,
  });
};

export type LoginStoreMutationResult = NonNullable<Awaited<ReturnType<typeof loginStore>>>;
export type LoginStoreMutationBody = StoreLoginReq;
export type LoginStoreMutationError = ErrorType<unknown>;

export const useLoginStore = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof loginStore>>, TError, { data: StoreLoginReq }, TContext>;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof loginStore>>, { data: StoreLoginReq }> = props => {
    const { data } = props ?? {};

    return loginStore(data);
  };

  return useMutation<Awaited<ReturnType<typeof loginStore>>, TError, { data: StoreLoginReq }, TContext>(
    mutationFn,
    mutationOptions,
  );
};