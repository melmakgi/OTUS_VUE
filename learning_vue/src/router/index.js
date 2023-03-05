import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/BookSearch.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/books',
            name: 'Витрина книг',
            component: () => import('@/views/BookList.vue')
        },
        {
            path: '/addbook',
            name: 'Добавить книгу',
            component: () => import('@/views/AddBook.vue')
        },
        {
            path: '/authors',
            name: 'Авторы книг',
            component: () => import('@/views/AuthorsList.vue')
        },
        {
            path: '/addauthor',
            name: 'Добавить автора',
            component: () => import('@/views/AddAuthor.vue')
        },
        {
            path: '/about',
            name: 'О ДЗ',
            component: () => import('@/views/About.vue')
        }
    ]
})

export default router