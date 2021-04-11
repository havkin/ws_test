<template>
  <div class="container">
    <div class="setupSection">
      <h4>Setup</h4>
      <button @click="moderatorSetup">moderator</button>
      <button @click="playerSetup">player 1</button>
      <a href="http://localhost:8080?user=player1" target="_blank">player 1</a>
    </div>
    <div class="testSection">
      <h4>Test message</h4>
      <div>
        <button @click="sendMsg">send</button>
      </div>
      <div>
        type
        <select name="" id="" size="1" class="typeInput">
          <option value="user_init">user_init</option>
          <option value="push_bot_start">push_bot_start</option>
          <option value="push_bot_stop">push_bot_stop</option>
          <option value="push_bot_pause">push_bot_pause</option>
        </select>
      </div>
      <div>
        data
        <textarea type="text" v-model="msgData" class="dataInput" list="list" />
      </div>
    </div>
  </div>
</template>

<script>
import { config } from '@/setup/config_1.ts';
export default {
  name: 'HelloWorld',
  data() {
    return {
      socket: null,
      msgType: '',
      msgData: '',
    };
  },
  created() {
    this.$socketClient.onOpen = () => {
      console.log('socket connected');
    };
    this.$socketClient.onClose = () => {
      console.log('socket closed');
    };
    this.$socketClient.onError = () => {
      console.log('socket error');
    };
  },
  // computed: {
  //   user() {
  //     return this.$route.query.user;
  //   }
  // },
  methods: {
    moderatorSetup() {
      this.$socketClient.sendObj(config.moderator.user_init);

      this.$socketClient.onMessage = msg => {
        console.log(JSON.parse(msg.data));
        const { type } = JSON.parse(msg.data);
        console.log('🚀 ~ type', type);
        if (type === 'user_initialized') {
          this.$socketClient.sendObj(config.moderator.room_check);
        }
        if (type === 'room_check_result') {
          this.$socketClient.sendObj(config.moderator.player_data);
        }
      };
    },
    playerSetup() {
      this.$socketClient.sendObj(config.player_1.user_init);

      this.$socketClient.onMessage = msg => {
        console.log(JSON.parse(msg.data));
        const { type } = JSON.parse(msg.data);
        console.log('🚀 ~ type', type);
        if (type === 'user_initialized') {
          this.$socketClient.sendObj(config.player_1.room_check);
        }
        if (type === 'room_check_result') {
          this.$socketClient.sendObj(config.player_1.player_data);
        }
      };
    },
    sendMsg() {
      const msg = {
        type: this.msgType,
        data: JSON.parse(`{${this.msgData}}`)
      };
      console.log('🚀 ~ msg', msg);
      this.$socketClient.sendObj(msg);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
.setupSection {
  display: flex;
  flex-direction: column;
}
.testSection {
  display: flex;
  flex-direction: column;
}
.typeInput {
  width: 300px;
  margin-bottom: 10px;
}
.dataInput {
  width: 300px;
  height: 100px;
}
button {
  margin: 5px;
  cursor: pointer;
}
</style>
