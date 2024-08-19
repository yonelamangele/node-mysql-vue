<template>
    
    <button @click="signUp = !signUp"> SignUp / Login </button>
    
    <div v-if="signUp">
        <h1> <u> Enter Your Info </u> </h1>

        <table>
            <tr> <th> <label> Name: </label> </th> <td> <input type="text" v-model="name"> </td> </tr>
            <tr> <th> <label> Surname: </label> </th> <td> <input type="text" v-model="surname"> </td></tr>
            <tr> <th> <label> Age: </label> </th> <td> <input type="text" v-model="age"> </td> </tr>
            <tr> <th> <label> Fav Coding Lang: </label> </th> <td> <input type="text" v-model="fav_coding_lang"> </td> </tr>
            <tr> <th> <label> Fav Car: </label> </th> <td> <input type="text" v-model="fav_car"> </td> </tr>
            <tr> <th> <label> Eye Color: </label> </th> <td> <input type="text" v-model="eye_color"> </td> </tr>
            <tr> <th> <label> Username: </label> </th> <td> <input type="text" v-model=" username"> </td> </tr>
            <tr> <th> <label> Password: </label> </th> <td> <input type="text" v-model="password"> </td>  </tr>
        </table>
        <button @click="addUser()"> Enter </button>

    </div>

    <div v-else>
        <h1> <u> Log In </u> </h1>
        <table>
            <tr> <th> <label> Username: </label> </th> <td> <input type="text" v-model=" username"> </td> </tr>
            <tr> <th> <label> Password: </label> </th> <td> <input type="text" v-model="password"> </td>  </tr>
        </table>
        <button @click="loginUser()"> Enter </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            surname: '',
            age: '',
            fav_coding_lang: '',
            fav_car: '',
            eye_color: '',
            username: '',
            password: '',
            signUp: true
        }
    },
    methods: {
        addUser() {
            return this.$store.dispatch('addUser', this.$data)
        }, 
        loginUser() {
            this.$store.dispatch('loginUser', { username:this.username, password:this.password})
          
        }
    }
}
</script>
<style>
    
</style>