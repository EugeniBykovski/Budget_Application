<template>
    <div class="budget-list-wrap">
        <ElCard :header="header">
            <!-- делаем проверку -->
            <template v-if="!isEmpty">
                <!-- выводим каждый элемент списка в цикле v-for -->
                <div class="list-item" v-for="(item, prop) in list" :key="prop">
                    <!-- выводим комментарии -->
                    <span class="budget-comment">{{ item.comment }}</span>
                    <!-- выводим значения -->
                    <span class="budget-value">{{ item.value }}</span>
                    <!-- пишем кнопку / метод удаления мы будем вызывать на кнопке и передаем item.id -->
                    <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
                </div>
            </template>
            <!-- иначе (если не сработает условие, то выведется alert) -->
            <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
        </ElCard>
    </div>
</template>

<script>
export default { // эта компонента будет принимать на вход массив из того, что нужно вывести
    name: "BudgetList",
    props: {
        list: { // приходит объект и по дефолту он будет ровняться пустому объекту
            type: Object,
            defailt: () => ({})
        }
    },
    data: () => ({ // передаем это в :header в template в качестве значения
        header: "Budget List",
        emptyTitle: "Empty List" // создаем и прокидываем title для нашего alert
    }),
    computed: {
        isEmpty() {
            return !Object.keys(this.list).length; // будем получать из списка массив ключей, измерять его длину
        }
    },
    methods: { // создаем методы
        deleteItem(id) { // метод принимает id.item, который мы хотим удалить и будет emit (имитить) событие и передавать id кого нужно удалить
            this.$emit('deleteItem', id);
        }
    }
};
</script>

<style scoped>
    .budget-list-wrap {
        max-width: 500px;
        margin: auto;
    }

    .list-item {
        display: flex;
        align-items: center;
        padding: 10px 15px;
    }

    .budget-value {
        font-weight: bold;
        margin-left: auto;
        margin-right: 20px;
    }
</style>