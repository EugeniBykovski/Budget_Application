<template>
  <div id="app"> <!-- добавляем наши компоненты -->
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance"/>
    <BudgetList :list="list" @deleteItem="onDeleteItem"/>
  </div>
</template>

<script>
// импортируем наши компоненты
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';

export default {
  name: 'app',
  components: { // регистрируем наши компоненты
    BudgetList,
    TotalBalance,
    Form
  },
  data: () => ({
    list: { // это список расходов-доходов в качестве объекта
      1: { // каждый отдельный элемент списка - доходы
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1,
      },
      2: { // каждый отдельный элемент списка - расходы
        type: 'OUTCOME',
        value: -50,
        comment: 'Some outcome comment',
        id: 2,
      },
    },
  }),
  computed: {
    totalBalance() { // возвращаем результат вызова метода Object.values, передавая туда list и будем все это перебирать методом reduce, стартовое значение которого будет 0, на каждой итерации мы будем получать аккумулятор и один item и мы будем сразу же в acc прибавлять значение item. И наш totalBalance мы будем передавать в нашу компоненту через :total
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
    }
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onFormSubmit(data) {
      // генерируем id
      const newObj = {
        ...data,
        id: String(Math.random()) // генерируем рандомное число
      };

      this.$set(this.list, newObj.id, newObj); // метод, который нужен для того, чтобы установить какие-то значения в объект и при этом сработала реактивность (указываем то, куда мы хотим установить, под какой ключ мы хотим установить и что мы хотим установить)
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
