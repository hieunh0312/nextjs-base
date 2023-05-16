/* eslint-disable no-useless-escape */
/* eslint-disable no-underscore-dangle */

export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:+\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PHONE_REGEX = /^(\+?61|\+?84|0)0?[1-9]\d{8,15}$/g;

export const IS_SPECIAL_CHARACTER =
  /^[0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýế,.!;@$? ]+$/;

export const LETTER =
  /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýế]+$/;

export const LETTER_WITH_SPACE_REGEX =
  /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýế ]+$/;

export const LETTER_NUMBER_WITH_SPACE_REGEX =
  /^[0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýế ]+$/;

export const LETTER_NUMBER_WITH_NO_SPACE_REGEX =
  /^[0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýế]+$/;

export const PICTURE_REGEX =
  /^([\w\.\- ]+(\.|\/)(jpeg|png|jpg|svg|JPG|JPEG|PNG|SVG))$/gm;

export const PICTURE_AND_PDF_REGEX =
  /^([\w\.\- ]+(\.|\/)(jpeg|png|jpg|JPG|JPEG|PNG|PDF|pdf))$/gm;

export const ACCENTED_REGEX = /^[0-9a-zA-Z_abcdefghijklmnopqrstuvwxyz]+$/;

export const IS_SPECIAL_ACCEPT = /^\S*$/;

export const NUMBER_ONLY_REGEX = /^[0-9]*$/;

export const NUMBER_WITH_DOT_REGEX = /^[0-9,.]+$/;

export const URL_REGEX =
  /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi;

export const DOB_REGEX =
  /^([0-2][0-9]|(3)[9])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[\S]{8,32}$/;

export const NEWPASSWORD_REGEX = /(?=.*?[a-z])(?=.*?[0-9])/;

export const MORE_THAN_2_WORDS = /^\s*[\S]+(\s+[\S]+)+\s*$/;

export const CHECK_SPACE = /(^\S*$)/;

export const CHECK_AT_LEAST_ONE_UPPERCASE = /[A-Z]/;

export const CHECK_AT_LEAST_ONE_LOWERCASE = /[a-z]/;

export const CHECK_AT_LEAST_ONE_NUMBER = /[\d]/;

export const CHECK_AT_LEASE_ONE_SYMBOL = /[$&+,:;=?@#|'<>.^*(){}%!/-]/;

export const PHONE_REGEX_EXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const PASSWORD_STRONGER_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?*@]).{8,16}$|^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
// - Min length: 8
// - Max length: 16
// - At least one uppercase letter
// - At least one lowercase letter
// - At least one number
// - Contain at least one ! ? * @
