<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <div class="d-block">
          <button @click="changeName">Change my name</button>
        </div>
        <p>Name is {{name}}</p>
        <p>Age is {{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                  :myName="name" 
                  @nameWasReset="name = $event"
                  :resetFn="resetName"
                  :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                  :userAge="age"
                  @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>
<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data: function(){
    return {
      name: 'Wittawat',
      age: 29,
    };
  },
  methods: {
    changeName(){
      this.name = "Bluenary";
    },
    resetName(){
      this.name = "Wittawat";      
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>
<style scoped>
div.component {
    background-color: lightblue;
}
</style>