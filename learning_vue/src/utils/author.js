import {ref} from "vue";
import {uniqueId} from "@/utils/uniqueID";
export const author = ({
    id: 1,
    fio: "",
    birthDate: "",
    gender: "",
    country: "",
    books: []
})
export let authors = ref([
    {
        id: 1,
        fio: "Толстой Лев Николаевич",
        birthDate: "1828-09-09",
        gender: "мужской",
        country: "Россия",
        books: [
            "Детство",
            "Война и Мир",
            "Казаки"
        ]
    },
    {
        id: 2,
        fio: "Иванов Алексей Викторович",
        birthDate: "1969-11-23",
        gender: "мужской",
        country: "Россия",
        books: [
            "Сердце пармы",
            "Золото бунта",
            "Географ глобус пропил"
        ]
    }
])


export function addAuthor(objAuthor){
    const item = Object.assign({}, objAuthor);
    item.id = uniqueId();;
    authors.value.push(item);
    console.log(authors.value)
}