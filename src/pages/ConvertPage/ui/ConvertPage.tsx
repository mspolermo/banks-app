import { memo } from 'react';
import { CurrencyConverter } from '@/widgets/CurrencyConverter';
import { Page } from '@/widgets/Page';

const ConvertPage = memo(() => {

    const titlePage = "Конвертер валют";
    const descriptionPage = `
        Быстрое и удобное преобразование денежных средств. 
        Эффективный инструмент для управления вашими финансами.
    `;

    return (
        <Page
            title={titlePage}
            description={descriptionPage}
        >
            <CurrencyConverter />
        </Page>
    );
});

export default ConvertPage;