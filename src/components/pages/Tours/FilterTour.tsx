'use client'
import { FC, useState } from 'react';
import scss from './FilterTour.module.scss'

const FILTERS = [
    { id: 'oneday', label: 'Однодневный' },
    { id: 'long', label: 'Длительный' },
    { id: 'guide', label: 'Гид' },
    { id: 'withStay', label: 'С проживанием' },
    { id: 'withFood', label: 'С питанием' },
    { id: 'bigGroup', label: 'Большая группа' },
    { id: 'smallGroup', label: 'Малая группа' },
    { id: 'easy', label: 'Лёгкий тур' },
    { id: 'medium', label: 'Средней сложности' },
    { id: 'hard', label: 'Сложный тур' },
];

const FilterTour: FC<{ onApply?: (filters: string[]) => void }> = ({ onApply }) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});

    const Checkbox = (id: string) => {
        setSelected((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const resetFilters = () => {
        setSelected({});
    };

    const applyFilters = () => {
        const activeFilters = Object.keys(selected).filter((key) => selected[key]);
        console.log('Применённые фильтры:', activeFilters);
        if (onApply) onApply(activeFilters);
    };

    return (
        <section>
            <div className={scss.FilterBox}>
                <button className={scss.regionBtn}>Регион</button>
                {FILTERS.map((filter) => (
                    <label key={filter.id} className={scss.checkBoxItem}>
                        <input
                            type="checkbox"
                            checked={!!selected[filter.id]}
                            onChange={() => Checkbox(filter.id)}
                        />
                        {filter.label}
                    </label>
                ))}

                 <div className={scss.btnFilter}>
                <button className={scss.applyBtn} onClick={applyFilters}>
                    Применить
                </button>

                <button className={scss.resetBtn} onClick={resetFilters}>
                    Сбросить
                </button>
            </div>

            </div>
           
        </section>
    );
};

export default FilterTour;