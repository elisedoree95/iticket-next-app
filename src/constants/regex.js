export const PATTERNS = {
    name: /^[a-zA-Z][a-zA-Z0-9 '.-]+$/,
    phone: /^6[5679][\d]{7}/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    idNumber: /[a-zA-Z0-9-]+/,
    bankCard: /[\w\d]+/,
    nextTel: /^66[\d]{7}/,
    orangeMoney: /^69[\d]{7}$|^65[56789][\d]{6}$/,
    mtnMobileMoney: /^6[78][\d]{7}$|^65[01234][\d]{6}$/
}