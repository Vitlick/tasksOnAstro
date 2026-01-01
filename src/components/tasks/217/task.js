function pairedParenthesesIsCorrect1(exp) {
    return [...exp].reduce((acc, el) => {
        return (acc >= 0)
            ? (el == '(')
                ? acc + 1
                : (el == ')')
                    ? acc - 1
                    : acc
            : acc

    }, 0) === 0
}

function pairedParenthesesIsCorrect2(exp) {
    let acc = 0;
    return [...exp].every(el => {
        if (el == '(') acc++;
        else if (el == ')') acc--;
        return acc >= 0
    }) && acc === 0
}

function pairedParenthesesIsCorrect(exp) {
    let acc = 0;
    for (const char of exp) {
        if (char == '(') acc++;
        else if (char == ')') acc--;
        if (acc < 0) return false
    }
    return acc === 0
}

export { pairedParenthesesIsCorrect as pairedParenthesesIsCorrect }
