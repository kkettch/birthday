import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/BirthdayHero.vue'
import AlinaQuizView from '@/views/AlinaQuizView.vue'
import AlinaTimelineView from '@/views/AlinaTimelineView.vue'
import AlinaMemesView from '@/views/AlinaMemesView.vue'

const router = createRouter({
    history: createWebHistory('/birthday/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: AlinaQuizView
        },
        {
            path: '/timeline',
            name: 'timeline',
            component: AlinaTimelineView
        },
        {
            path: '/memes',
            name: 'memes',
            component: AlinaMemesView
        }
    ],
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' }
    }
})

export default router