// Получаем данные с сайта

fetch("https://varankin_dev.elma365.ru/api/extensions/2a38760e-083a-4dd0-aebc-78b570bfd3c7/script/users")
    .then(response => response.json())
    .then(json => console.log(json))

// Массив сотрудников организации
const staff = [{
    "id": 1,
    "username": "user1",
    "surname": "Быстров",
    "firstName": "Альберт",
    "secondName": ""
}, {"id": 2, "username": "user2", "surname": "Стольный", "firstName": "Олег", "secondName": ""}, {
    "id": 3,
    "username": "user3",
    "surname": "Кузнецов",
    "firstName": "Сергей",
    "secondName": ""
}, {"id": 4, "username": "user4", "surname": "Васильев", "firstName": "Олег", "secondName": ""}, {
    "id": 5,
    "username": "user5",
    "surname": "Кузнецов",
    "firstName": "Александр",
    "secondName": ""
}, {"id": 6, "username": "user6", "surname": "Стольный", "firstName": "Антон", "secondName": ""}, {
    "id": 7,
    "username": "user7",
    "surname": "Быстров",
    "firstName": "Григорий",
    "secondName": ""
}, {"id": 8, "username": "user8", "surname": "Кожин", "firstName": "Влад", "secondName": ""}, {
    "id": 9,
    "username": "user9",
    "surname": "Некрасов",
    "firstName": "Борис",
    "secondName": ""
}, {"id": 10, "username": "user10", "surname": "Мозгов", "firstName": "Влад", "secondName": ""}, {
    "id": 11,
    "username": "user11",
    "surname": "Васильев",
    "firstName": "Иван",
    "secondName": ""
}, {"id": 12, "username": "user12", "surname": "Иванов", "firstName": "Олег", "secondName": ""}, {
    "id": 13,
    "username": "user13",
    "surname": "Петров",
    "firstName": "Иван",
    "secondName": ""
}, {"id": 14, "username": "user14", "surname": "Добрый", "firstName": "Сергей", "secondName": ""}, {
    "id": 15,
    "username": "user15",
    "surname": "Васильев",
    "firstName": "Альберт",
    "secondName": ""
}, {"id": 16, "username": "user16", "surname": "Стольный", "firstName": "Олег", "secondName": ""}, {
    "id": 17,
    "username": "user17",
    "surname": "Тонких",
    "firstName": "Антон",
    "secondName": ""
}, {"id": 18, "username": "user18", "surname": "Мозгов", "firstName": "Алексей", "secondName": ""}, {
    "id": 19,
    "username": "user19",
    "surname": "Тонких",
    "firstName": "Денис",
    "secondName": ""
}, {"id": 20, "username": "user20", "surname": "Мозгов", "firstName": "Алексей", "secondName": ""}, {
    "id": 21,
    "username": "user21",
    "surname": "Петренко",
    "firstName": "Олег",
    "secondName": ""
}, {"id": 22, "username": "user22", "surname": "Смагин", "firstName": "Денис", "secondName": ""}, {
    "id": 23,
    "username": "user23",
    "surname": "Петренко",
    "firstName": "Сергей",
    "secondName": ""
}, {"id": 24, "username": "user24", "surname": "Мозгов", "firstName": "Иван", "secondName": ""}, {
    "id": 25,
    "username": "user25",
    "surname": "Потапенко",
    "firstName": "Альберт",
    "secondName": ""
}]


// Переносим данные в таблицу

function mainTable(data) {
    // Добавляем главные элемент таблицы
    let tbody = document.getElementById("tbody")
    // Проходим циклом по массивы данных
    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                            <th>${data[i].surname}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                                   </tr>`

        tbody.innerHTML += row

    }
}

mainTable(staff)


    // Массив с задачами

   let tasks = [{
    "id": "ad528fba-d583-439b-af1c-d7d6a206ac53",
    "subject": "Анализ",
    "description": "",
    "creationAuthor": 1,
    "executor": 1,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-21",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "a5dc9b12-1f98-47eb-bc37-8d87871e37ec",
    "subject": "Планирование",
    "description": "",
    "creationAuthor": 1,
    "executor": 1,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "47d4d3af-9c71-4232-84fb-34975631185a",
    "subject": "Проектирование",
    "description": "",
    "creationAuthor": 1,
    "executor": 2,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-23",
    "planEndDate": "2022-02-24",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "263cb56d-4bcc-4f81-9429-8a5830c3a3c0",
    "subject": "Разработка",
    "description": "",
    "creationAuthor": 1,
    "executor": 3,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-23",
    "planEndDate": "2022-02-28",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "fe64da80-46f7-4168-9564-114bf4f7b349",
    "subject": "Тестирование",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-25",
    "planEndDate": "2022-02-28",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "5e4ad23b-f7d4-4f3f-b77a-81af7b26c415",
    "subject": "Заместитель",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "8ca0ba70-8466-44e7-b20a-b70be382f164",
    "subject": "Наблюдатель",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "f284156f-9706-4b3d-a518-9582db9432cc",
    "subject": "Декоратор",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "3afd0605-9a8c-4ed4-9a84-228173612d2d",
    "subject": "Фасад",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "f9abfdd1-aaa0-4f3b-8b54-4d6431a62fbe",
    "subject": "Адаптер",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "d283b9f4-2597-404c-891c-0a38f2af9ee5",
    "subject": "Строитель",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "245e3a70-b218-4b58-9e51-b68ece23eecc",
    "subject": "Мост",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "8f5578d6-227e-4aa0-970e-39d084bb9685",
    "subject": "Команда",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "e0d3f3d4-08c7-4f1c-95db-d128c9e43f23",
    "subject": "Итератор",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "d2195ffe-7559-4a11-ae81-92ee7c4a09b7",
    "subject": "Посредник",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "0e839195-286e-4722-beb6-03cc78845dca",
    "subject": "Прототип",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "ef66aedb-6e14-4ac2-8847-813d11f0d1a2",
    "subject": "Компоновщик",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "aa725dd7-ba0c-41a5-a652-60deee2e2626",
    "subject": "Снимок",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "8c77a3fd-bd0a-45df-9aae-9bd95d8b8516",
    "subject": "Состояние",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "950300d8-eb94-4af5-ba5a-bc8ce6771745",
    "subject": "Стратегия",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "afb4c246-5733-4638-839e-bb928ebbdcba",
    "subject": "Одиночка",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "f2303604-43e3-42e4-b553-889229dba280",
    "subject": "Легковес",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "c0b0e139-fde6-471c-be2f-675ba9e78777",
    "subject": "Посетитель",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "2b5e5852-5569-4af9-8904-2198b4cc7929",
    "subject": "Фабричный метод",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "9fa613fe-cb49-4a01-8ac6-959b57879de6",
    "subject": "Абстрактная фабрика",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}, {
    "id": "26236a8d-c89b-4e70-9969-d08a5bf00852",
    "subject": "Цепочка обязанностей",
    "description": "",
    "creationAuthor": 1,
    "executor": null,
    "creationDate": "2022-02-21",
    "planStartDate": "2022-02-22",
    "planEndDate": "2022-02-23",
    "endDate": "2022-02-21",
    "status": 1,
    "order": 1
}]

// Выводим данные в бэклог

function secondTable(array){
    for (let i = 0; i < array.length; i++){
        let row_2 = `<tr>
                      <th>${array[i].subject}</th>
        </tr>`
        tbodys.innerHTML += row_2
    }
}

secondTable(tasks)

// Event listener
hy = (event) => {
    console.log(event.currentTarget)
}

let abc = document.querySelectorAll(".data")

abc.forEach(abcd =>{
    abcd.addEventListener("click", hy)
})

