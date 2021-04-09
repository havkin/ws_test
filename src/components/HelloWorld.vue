<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <button @click="connectWS">connect</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: function() {
return {
    socket: WebSocket,
    data1: {"type":"user_init","data":{"id":"606ef928aa0f3d639c4d66fa"}},
    data1_1: {"type":"user_init","data":{"id":"606e9129e00a6222bc87a3ee"}},
    data2: {"type":"room_check","data":{"roomName":"kn8v40n0"}},
    data2_1: {"type":"room_check","data":{"roomName":"/"}},
    data3: {"type":"player_data","data":{"liarsToken":"eyJhbGciOiJIUzI1NiJ9.dGVzdEB0ZXN0LnJ1.LrGehCEInbI8iSreI-VdgOpXSOsaDFLm6hBGSVOwf8E","JID":"b689089a","bareJid":"b689089a-a16d-4f90-bdce-4688d322570b@warp.liars.club/ddbb3978-fbd9-4b21-b532-827dc7432f02","avatarLink":"profile_images/ht3zilvfc806xccpqzna","isModerator":false,"name":"tester","room":"kn8v40n0"}}
  };
},
created () {
    this.$socketClient.onOpen = () => {
      console.log('socket connected')
    }
    // this.$socketClient.onMessage = msg => {
    //   console.log(JSON.parse(msg.data))
    // }
    this.$socketClient.onClose = () => {
      console.log('socket closed')
    }
    this.$socketClient.onError = () => {
      console.log('socket error')
    }
  },
  methods: {
    connectWS () {
      // let data = {
      //   type: 'push_bot_start',
      //   data: {}
      // }
    this.$socketClient.sendObj(this.data1)
     this.$socketClient.onMessage = msg => {
       console.log(JSON.parse(msg.data))
      const {type} = JSON.parse(msg.data)
      console.log('🚀 ~ type', type)
      if (type === "user_initialized") {
        this.$socketClient.sendObj(this.data2)
      }
    }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
