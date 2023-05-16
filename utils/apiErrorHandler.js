/* eslint-disable no-nested-ternary */
import { TOAST_MESSAGE_LENGTH_LIMIT, TOAST_TIME_CLOSE } from "@/constants";

import appToast from "./appToast";

export const showToastError = (message) => {
  const mesLength = message?.length;
  const closeTime =
    mesLength < TOAST_MESSAGE_LENGTH_LIMIT.SHORT
      ? TOAST_TIME_CLOSE.SHORT
      : mesLength < TOAST_MESSAGE_LENGTH_LIMIT.MEDIUM
      ? TOAST_TIME_CLOSE.MEDIUM
      : TOAST_TIME_CLOSE.LONG;

  appToast.error(message, { autoClose: closeTime });
};

export const validationErrorsArray = (errors = []) => {
  for (let i = 0; i < errors.length; i += 1) {
    showToastError(errors[i]);
  }
};

export const apiErrorHandler = (error, showToast = true) => {
  const message = Object.keys(error).length
    ? "Something went wrong, please try again later"
    : error;

  if (error?.response?.data?.messages?.length) {
    validationErrorsArray(error.response.data.messages);
    return;
  }

  if (showToast) {
    showToastError(message);
  }
};
