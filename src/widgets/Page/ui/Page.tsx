import { ReactNode, memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className? : string;
    children: ReactNode;
    title: string;
    description: string;
}

export const Page = memo((props: PageProps) => {
    const {
        className, children, title, description
    } = props;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <article
            className={classNames(cls.Page, {}, [className])}
        >
            <section className={cls.top}>
                    <h1 className={cls.title}>{title}</h1>
                    <p className={cls.description}>{description}</p>
            </section>
            <section className={cls.childWrapper}>
                {children}    
            </section>
        </article>
    );
});
