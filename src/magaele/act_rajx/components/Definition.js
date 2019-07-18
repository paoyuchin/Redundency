export type SearchInputProps = {
    placeholderText: string,
    onChange: function,
    keyWord: string,
    containerClass: string,
    labelClass: string,
    inputClass: string,
    clearWord: (x: string) => void,
    isFocus: (event) => event
}