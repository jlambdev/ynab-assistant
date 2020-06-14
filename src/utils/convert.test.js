import { stripHeaderRow, prependHeaderRow, trimDate, formatDate, convertRow, convert } from './convert';
import { SCHEMAS } from './constants';

describe.skip('convert: individual methods', () => {
    test('stripHeaderRow', () => {
        const input = [
            ['Date', 'Description', 'Amount'],
            ['01/01/2019', 'Purchase', '44.50'],
        ];
        const expected = [['01/01/2019', 'Purchase', '44.50']];
        stripHeaderRow(input);
        expect(input).toStrictEqual(expected);
    });

    test('prependHeaderRow', () => {
        const input = [['01/01/2019', 'Purchase', '44.50']];
        const header = ['Date', 'Description', 'Amount'];
        const expected = [
            ['Date', 'Description', 'Amount'],
            ['01/01/2019', 'Purchase', '44.50'],
        ];
        prependHeaderRow(input, header);
        expect(input).toStrictEqual(expected);
    });

    test('trimDate', () => {
        const input = '2018-01-20 20:04:48 +0000';
        const expected = '2018-01-20';
        const result = trimDate(input);
        expect(result).toEqual(expected);
    });

    test('formatDate', () => {
        const input = '12 Feb 2020';
        const expected = '2020-02-12';
        const result = formatDate(input);
        expect(result).toEqual(expected);
    });

    test('convertRow', () => {
        const row = [
            'tx_00009SnVT77KLpCQyXaaaa',
            '2018-01-20 20:04:48 +0000',
            '-9.10',
            'GBP',
            '-9.10',
            'GBP',
            'entertainment',
            '🍸',
            'Headrow House',
            '19 The Headrow, Leeds LS1 6PU',
            '',
            '',
        ];
        const columnMap = [1, 8, 2];
        const expected = ['2018-01-20 20:04:48 +0000', 'Headrow House', '-9.10'];
        const result = convertRow(row, columnMap);
        expect(result).toEqual(expected);
    });
});

describe.skip('convert: combined examples', () => {
    test('lloyds example', () => {
        const schema = SCHEMAS.lloyds;
        const input = [
            [
                'Transaction Date',
                'Transaction Type',
                'Sort Code',
                'Account Number',
                'Transaction Description',
                'Debit Amount',
                'Credit Amount',
                'Balance',
            ],
            ['13/12/2017', 'DEB', '77-14-04', '33217868', 'PAYPAL *SPOTIFY', '9.99', '', '15924.69'],
            ['11/12/2017', 'DD', '77-14-04', '33217868', 'COUNCIL TAX', '149', '', '15934.68'],
            ['08/12/2017', 'FPI', '77-14-04', '33217868', 'WORK INC', '', '14.9', '16083.68'],
        ];
        const expected = [
            SCHEMAS.lloyds.headers,
            ['13/12/2017', 'PAYPAL *SPOTIFY', '9.99', ''],
            ['11/12/2017', 'COUNCIL TAX', '149', ''],
            ['08/12/2017', 'WORK INC', '', '14.9'],
        ];
        const result = convert(input, schema);
        expect(result).toStrictEqual(expected);
    });

    test('monzo example', () => {
        const schema = SCHEMAS.monzo;
        const input = [
            [
                'id',
                'created',
                'amount',
                'currency',
                'local_amount',
                'local_currency',
                'category',
                'emoji',
                'description',
                'address',
                'notes',
                'receipt',
            ],
            [
                'tx_00009UMsnTvyNA9koLaaaa',
                '2018-03-08 19:33:11 +0000',
                '-9.07',
                'GBP',
                '-10.13',
                'EUR',
                'groceries',
                '🍏',
                'Edeka Kelz',
                '38 Straße Der Pariser Kommune, Berlin, Berlin, 10200, Germany',
                '',
                '',
            ],
            [
                'tx_00009UMo8NAkCxv7Q9aaaa',
                '2018-03-08 18:40:56 +0000',
                '-200.58',
                'GBP',
                '-223.96',
                'EUR',
                'shopping',
                '🔌',
                'SATURN',
                'Vo?stra?e 24, Berlin, 10117, Germany',
                '',
                '',
            ],
            [
                'tx_00009UGczF54er260Laaaa',
                '2018-03-05 19:07:46 +0000',
                '-10.53',
                'GBP',
                '-11.77',
                'EUR',
                'groceries',
                '🍏',
                'Edeka Kelz',
                '38 Straße Der Pariser Kommune, Berlin, Berlin, 10200, Germany',
                '',
                '',
            ],
        ];
        const expected = [
            SCHEMAS.monzo.headers,
            ['2018-03-08', 'Edeka Kelz', '-9.07'],
            ['2018-03-08', 'SATURN', '-200.58'],
            ['2018-03-05', 'Edeka Kelz', '-10.53'],
        ];
        const result = convert(input, schema);
        expect(result).toStrictEqual(expected);
    });

    test('revolut example', () => {
        const schema = SCHEMAS.revolut;
        const input = [
            [
                'Completed Date',
                'Description',
                'Paid Out (EUR)',
                'Paid In (EUR)',
                'Exchange Out',
                'Exchange In',
                'Balance (EUR)',
                'Category',
                'Notes',
            ],
            ['30 Dec 2019', 'Groupon Office', '44.90', '', '', '', '26.70', 'Shopping', ''],
            ['25 Dec 2019', 'Wöllhaf Retail GmbH', '4.70', '', '', '', '71.60', 'Shopping', ''],
            [
                '22 Dec 2019',
                'Exchange EUR to  FX Rate €1 = £0.8473',
                '17.71',
                '',
                'EUR 17.71',
                '',
                '76.30',
                'General',
                '',
            ],
        ];
        const expected = [
            schema.headers,
            ['2019-12-30', 'Groupon Office', '44.90', ''],
            ['2019-12-25', 'Wöllhaf Retail GmbH', '4.70', ''],
            ['2019-12-22', 'Exchange EUR to  FX Rate €1 = £0.8473', '17.71', ''],
        ];
        const result = convert(input, schema);
        expect(result).toStrictEqual(expected);
    });
});
