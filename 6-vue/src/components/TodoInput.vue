<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="ture"></i>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem:''
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== '') { // newTodoItem 의 값이 공백이 않을 경우
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = ''
        }
    }
}
</script>

<style>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: #fff;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: .9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
    }
    .addBtn {
        color: #fff;
        vertical-align: middle;
    }
</style>