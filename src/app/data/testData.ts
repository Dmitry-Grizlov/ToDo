import { Category } from '../model/Category';
import { Priority } from '../model/Priority';
import { Task } from '../model/Task';

export class TestData {
    static Categories: Category[] = [
        { Id: 1, Title: 'Работа' },
        { Id: 2, Title: 'Семья' },
        { Id: 3, Title: 'Учеба' },
        { Id: 4, Title: 'Отдых' },
        { Id: 5, Title: 'Спорт' },
        { Id: 6, Title: 'Еда' },
        { Id: 7, Title: 'Финансы' },
        { Id: 8, Title: 'Гаджеты' },
        { Id: 9, Title: 'Здоровье' },
        { Id: 10, Title: 'Автомобиль' },
    ];

    static Priorities: Priority[] = [
        { Id: 1, Title: 'Низкий', Color: '#e5e5e5' },
        { Id: 2, Title: 'Средний', Color: '#85d1b2' },
        { Id: 3, Title: 'Высокий', Color: '#F1828b' },
        { Id: 4, Title: 'Очень срочно', Color: '#f1128d' },
    ];

    static Tasks: Task[] = [
        {
            Id: 1,
            Title: 'Залить бензин полный бак',
            Completed: false,
            Priority: TestData.Priorities[2],
            Category: TestData.Categories[9],
            Date: new Date('2019-04-10'),
        },

        {
            Id: 2,
            Title: 'Передать отчеты начальнику управления',
            Completed: false,
            Priority: TestData.Priorities[0],
            Category: TestData.Categories[0],
            Date: new Date('2019-04-11'),
        },

        {
            Id: 3,
            Title: 'Убраться у себя в комнате, полить растение',
            Completed: false,
            Priority: TestData.Priorities[2],
            Category: TestData.Categories[1],
        },

        {
            Id: 4,
            Title: 'Сходить в парк с семьей, пригласить друзей',
            Completed: false,
            Priority: TestData.Priorities[1],
            Category: TestData.Categories[1],
            Date: new Date('2019-08-17'),
        },

        {
            Id: 5,
            Title: 'Найти и выучить учебник по квантовой физике',
            Completed: false,
            Priority: TestData.Priorities[1],
            Category: TestData.Categories[2],
            Date: new Date(''),
        },

        {
            Id: 6,
            Title: 'Сходить на семинар по программированию',
            Completed: true,
            Priority: TestData.Priorities[1],
            Category: TestData.Categories[2],
            Date: new Date('2019-06-11'),
        },

        {
            Id: 7,
            Title: 'Найти билеты в Турцию, выбрать отель',
            Completed: false,
            Priority: TestData.Priorities[2],
            Category: TestData.Categories[3],
        },

        {
            Id: 8,
            Title: 'Приготовить ужин для всей семьи (сёмга с картошкой)',
            Completed: false,
            Category: TestData.Categories[5],
        },

        {
            Id: 9,
            Title: 'Подтянуться 10 раз',
            Completed: false,
            Priority: TestData.Priorities[2],
            Category: TestData.Categories[4],
            Date: new Date('2019-03-12'),
        },

        {
            Id: 10,
            Title: 'Пробежать 100м',
            Completed: false,
            Priority: TestData.Priorities[0],
            Category: TestData.Categories[4],
        },

        {
            Id: 11,
            Title: 'Организовать детский праздник',
            Completed: false,
        },

        {
            Id: 12,
            Title: 'Сходить на лекцию "Как научиться программировать на Java"',
            Completed: false,
            Priority: TestData.Priorities[1],
            Category: TestData.Categories[2],
        },

        {
            Id: 13,
            Title: 'Купить продукты на неделю',
            Completed: false,
            Priority: TestData.Priorities[2],
            Category: TestData.Categories[5],
            Date: new Date('2019-05-11'),
        },

        {
            Id: 14,
            Title: 'Провести собрание по поводу всех проектов',
            Completed: true,
            Category: TestData.Categories[0],
        },

        {
            Id: 15,
            Title: 'Сдать экзамен по Java',
            Completed: true,
            Priority: TestData.Priorities[2],
        },

        {
            Id: 16,
            Title: 'Положить 100 000р в банк на депозит',
            Completed: false,
            Priority: TestData.Priorities[3],
            Category: TestData.Categories[6],
        },

        {
            Id: 17,
            Title: 'Попросить аванс на работе',
            Completed: false,
            Priority: TestData.Priorities[2],
            Category: TestData.Categories[6],
        },

        {
            Id: 18,
            Title: 'Помыть машину',
            Completed: false,
            Priority: TestData.Priorities[3],
            Category: TestData.Categories[9],
        },

        {
            Id: 19,
            Title: 'Сравнить новый айпад с самсунгом',
            Completed: false,
            Priority: TestData.Priorities[0],
            Category: TestData.Categories[7],
            Date: new Date('2019-10-11'),
        },

        {
            Id: 20,
            Title: 'Футбол с сотрудниками',
            Completed: false,
            Priority: TestData.Priorities[0],
            Category: TestData.Categories[4],
            Date: new Date('2019-03-17'),
        }
    ];
}