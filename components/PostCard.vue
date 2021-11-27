
<template>
  <v-card style="margin-bottom: 20px">
    <v-img />
    <v-card-text>
      <div>
        <h3>
          {{ post.User.nickname }}
        </h3>
        <div>{{ post.content }}</div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="orange">
        <v-icon>mdi-send</v-icon>
      </v-btn>
      <v-btn text color="orange">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
     
      <v-btn text color="orange">
        <v-icon>mdi-comment-outline</v-icon>
      </v-btn>

       <v-menu offset-y open-on-hover>
         <template v-slot:activator="{ on }">
      <v-btn text color="orange" v-on="on">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
         </template>
         <div style="background: white">
           <v-btn dark color="red" @click="onRemovePost">삭제</v-btn>
           <v-btn text color="orange" @click={}>수정</v-btn>
         </div>
      </v-menu>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
      post: {
        type : Object,
        required: true
      }
    },
    methods: {
      onRemovePost() {
        this.$store.dispatch('posts/remove', {

        })
      }
    }
  }
</script>

<style scoped>

</style>