// импортируем нужные нам компоненты из фреймворка ElementUI и делаем их глобальными для всего нашего проекта и устанавливаем язык английский:
import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert
} from 'element-ui';

// объединим все эти компоненты в один массив
const elements = [Button, Card, Form, FormItem, Input, Select, Option, Alert];

// заставляем фреймворк работать на английском, а не на китайском
locale.use(lang);

elements.forEach(El => Vue.use(El, { locale }));