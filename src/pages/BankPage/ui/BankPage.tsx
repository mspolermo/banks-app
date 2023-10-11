import { memo } from 'react';
import { BankById } from '@/widgets/BankById';
import { Page } from '@/widgets/Page';

const BankPage = memo(() => {
    const titlePage = "Информация о банке";
    const descriptionPage = `
        Гид в мире финансовых услуг. 
        Узнайте больше о выбранном банке и его предложениях
    `;

    return (
        <Page
            title={titlePage}
            description={descriptionPage}
        >
            <BankById />
        </Page>
    );
});

export default BankPage;
