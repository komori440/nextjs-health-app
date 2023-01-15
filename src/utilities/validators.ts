const validators = {
    alpha_numeric: {
        value: /^[a-zA-Z0-9\s]*$/i,
        message: '半角英数字で入力してください。',
    },

    address_format: {
        value: /^[^$&+:;=?@#|'<>.^*∗()%!]+$/,
        message: '特殊文字を入力しないでください。',
    },

    fax: {
        value: /^(\+?\d{1,}(\s?|-?)\d*(\s?|-?)\(?\d{2,}\)?(\s?|-?)\d{3,}\s?\d{3,})$/i,
        message: 'FAX番号は有効なファックスでなければなりません。',
    },

    email_format: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'メールアドレスの形式が正しくありません。',
    },

    day_format: {
        value: /(3[01]|[12][0-9]|0[1-9])$/,
        message: '入力日が月に存在しません。',
    },

    month_format: {
        value: /(1[0-2]|0[1-9])$/,
        message: '入力月が年に存在しません。',
    },

    checkKana: {
        value: /^[ァ-ンｧ-ﾝﾞﾟー\s]+$/,
        message: 'カタカナで入力してください。',
    },

    checkSpecialCharacter: {
        value: /^[^$&+,:;=?@#|'<>.^*∗()%!]+$/,
        message: '特殊文字を入力しないでください。',
    },

    phone_number: {
        value: /^0\d{1,4}-\d{1,4}-\d{3,4}$/,
        message: '正しい電話番号をハイフンありで入力してください。',
    },
}

export default validators
