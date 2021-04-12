<template>
  <div class="container">
    <div class="setupSection">
      <h4>Setup</h4>
      <template v-if="isModerator">
        <button @click="moderatorSetup">moderator</button>
        <a href="http://localhost:8080?user=player1" target="_blank" class="toPlayerLink">player 1</a>
        <a href="http://localhost:8080?user=player2" target="_blank" class="toPlayerLink">player 2</a>
      </template>
    </div>
    <div class="testSection">
      <h4>Test message</h4>
      <div>
        <button @click="sendMsg">send</button>
      </div>
      <div>
        type
        <select name="" id="" size="1" class="typeInput" v-model="msgType">
          <option v-for="(type, index) in types" :value="type" :key="index">{{type}}</option>
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
import { types } from '@/setup/message_types.ts';
export default {
  name: 'HelloWorld',
  data() {
    return {
      socket: null,
      msgType: '',
      msgData: '',
      types,
    };
  },
  created() {
    document.title = `ws_test ${this.user}`;
    this.$socketClient.onOpen = () => {
      console.log('socket connected', this.user);
      if (!this.isModerator) {
        this.playerSetup();
      }
    };
    this.$socketClient.onClose = () => {
      console.log('socket closed');
    };
    this.$socketClient.onError = () => {
      console.log('socket error');
    };

  },
  computed: {
    user() {
      return this.$route.query.user ?? 'moderator';
    },
    isModerator() {
      return this.user === 'moderator';
    }
  },
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
      this.$socketClient.sendObj(config[this.user].user_init);

      this.$socketClient.onMessage = msg => {
        console.log(JSON.parse(msg.data));
        const { type } = JSON.parse(msg.data);
        console.log('🚀 ~ type', type);
        if (type === 'user_initialized') {
          this.$socketClient.sendObj(config[this.user].room_check);
        }
        if (type === 'room_check_result') {
          this.$socketClient.sendObj(config[this.user].player_data);
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
.toPlayerLink {
  margin-top: 5px;
}
button {
  margin: 5px;
  cursor: pointer;
}
</style>
