import {formatWord, toCapitalCase} from './FormatText';
const TESTS = {
    formatWord: [
        {input: 'simple', output: 'Simple'},
        {input: 'Simple', output: 'Simple'},
        {input: 'sIMPLE', output: 'Simple'},
        {input: 'SIMPLE', output: 'Simple'}
    ],
    toCapitalCase: [
        {input: 'simple test string', output: 'Simple Test String'},
        {input: 'Simple Test String', output: 'Simple Test String'},
        {input: 'sIMPLE tEST sTRING', output: 'Simple Test String'},
        {input: 'SIMPLE TEST STRING', output: 'Simple Test String'}
    ]
};

describe('#Testing formatWord Function', () => {
    TESTS.formatWord.forEach((test, id) => {
        it(`# formatWord -> id: ${id}`, () => {
            expect(formatWord(test.input)).toEqual(test.output);
        });
    });
    TESTS.toCapitalCase.forEach((test, id) => {
        it(`# toCapitalCase -> id: ${id}`, () => {
            expect(toCapitalCase(test.input)).toEqual(test.output);
        });
    });
});
