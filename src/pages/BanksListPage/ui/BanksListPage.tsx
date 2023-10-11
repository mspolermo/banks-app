import { memo } from 'react';
import { BanksListWidget } from '@/widgets/BanksListWidget';
import { Page } from '@/widgets/Page';

const BanksListPage = memo(() => {

    const titlePage = "Лучшие финансовые решения";
    const descriptionPage = `
        Исследуйте наш обширный список банков, чтобы найти наилучшие 
        финансовые продукты и услуги. Сравнивайте банки, их местоположение, 
        расстояние от вас и другие важные критерии.
    `;

    return (
        <Page
            title={titlePage}
            description={descriptionPage}
        >
            <BanksListWidget />
        </Page>
    );
});

export default BanksListPage;
