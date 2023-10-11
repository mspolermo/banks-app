import { classNames } from '@/shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass cl1 cl2';
        expect(classNames('someClass', {}, ['cl1', 'cl2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass cl1 cl2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['cl1', 'cl2'],
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass cl1 cl2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['cl1', 'cl2'],
        )).toBe(expected);
    });

    test('with mods undefiend', () => {
        const expected = 'someClass cl1 cl2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['cl1', 'cl2'],
        )).toBe(expected);
    });
});
