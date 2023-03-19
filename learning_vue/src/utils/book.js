import { ref } from "vue";
import { uniqueId } from "@/utils/uniqueID";

export const book = {
  id: 0,
  title: "",
  authors: "",
  description: "",
  categories: "",
  price: "",
  tag: "",
  publishing: "",
  publishedDate: "",
  isbn: "",
  image: "",
};
export let books = ref([
  {
    id: 1,
    title: "Детство",
    authors: "Толстой Лев Николаевич",
    description:
      "Счастливая, счастливая, невозвратимая пора детства! Как не любить, не лелеять воспоминаний о ней?",
    categories: "Повести и рассказы о детях",
    price: "280",
    tag: "рассказы",
    publishing: "Искатель",
    publishedDate: "2010",
    isbn: "978-5-94743-822-2",
    image: "detstvo.jpeg",
  },
  {
    id: 2,
    title: "Война и Мир",
    authors: "Толстой Лев Николаевич",
    description:
      "Роман Льва Николаевича Толстого «Война и мир» — книга на все времена.",
    categories: "Классическая отечественная проза",
    price: "6948",
    tag: "роман",
    publishedDate: "2017",
    publishing: "Вита-Нова",
    isbn: "978-5-9268-2585-2 ",
    image: "voina_mir.jpeg",
  },
  {
    id: 3,
    title: "Сердце пармы",
    authors: "Иванов Алексмей Викторович",
    description:
      "«XV век от Рождества Христова, почти семь тысяч лет от Сотворения мира... ",
    categories: "Исторический роман",
    price: "700",
    tag: "роман",
    publishedDate: "2021",
    publishing: "Альпина",
    isbn: "978-5-00139-500-3",
    image: "heart_parma.jpeg",
  },
  {
    id: 4,
    title: "Золото бунта",
    authors: "Иванов Алексмей Викторович",
    description:
      "778 год. Урал дымит горными заводами, для которых существует только одна дорога в Россию - бурная река Чусовая.",
    categories: "Современная проза",
    price: "900",
    tag: "проза",
    publishedDate: "2019",
    publishing: "Альпина",
    isbn: "978-5-00139-504-1",
    image: "zoloto_bunta.jpeg",
  },
]);

export function addBook(objBook) {
  const item = Object.assign({}, objBook);
  item.id = uniqueId();
  books.value.push(item);
}

export function delBookItem(id) {
  books.value = books.value.filter((item) => item.id !== id);
}
