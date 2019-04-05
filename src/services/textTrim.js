const textTrim = (string) => {
    const slicedString = string.slice(0, 30);
    return `${slicedString}...`
}

export default textTrim;