<template>
  <div class="container">
    <div class="setupSection">
      <h4>Setup</h4>
      <template v-if="isModerator">
        <button @click="moderatorSetup">start call</button>
        <a href="http://localhost:8080?user=player1" target="_blank" class="toPlayerLink">player 1</a>
        <a href="http://localhost:8080?user=player2" target="_blank" class="toPlayerLink">player 2</a>
        <div v-for="qnt in PLAYERS_QNT" :key="qnt">
          <h4>игроков: {{qnt}}</h4>
          <button @click="rolesRandomize(qnt)">roles randomize</button>
          <button @click="startGame(qnt)">start game</button>
          <hr />
        </div>
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
import { config } from '@/setup/config.ts';
import { types, datas } from '@/setup/message_types.ts';
import roleConfirm from '@/setup/role_confirm.json';
import { roles } from '@/setup/roles_randomize';
import { startGame } from '@/setup/start_game';

export default {
  name: 'HelloWorld',
  data() {
    return {
      socket: null,
      msgType: '',
      msgData: '',
      types,
      PLAYERS_QNT: ['one', 'two'],
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
    startGame(playersQnt) {
      this.$socketClient.sendObj(startGame[playersQnt]);
    },
    rolesRandomize(playersQnt) {
      this.$socketClient.sendObj(roles[playersQnt]);
    },
    moderatorSetup() {
      this.$socketClient.sendObj(config.moderator.user_init);

      this.$socketClient.onMessage = msg => {
        const { type } = JSON.parse(msg.data);
        if (type === 'user_initialized') {
          this.$socketClient.sendObj(config.moderator.player_data);
        }
      };
    },
    playerSetup() {
      this.$socketClient.sendObj(config[this.user].user_init);

      this.$socketClient.onMessage = msg => {
        const { type } = JSON.parse(msg.data);
        if (type === 'user_initialized') {
          this.$socketClient.sendObj(config[this.user].player_data);
        }
        if (type === 'role_assigned') {
          this.$socketClient.sendObj(roleConfirm);
        }
      };
    },
    sendMsg() {
      const msg = {
        type: this.msgType,
        data: JSON.parse(this.msgData)
      };
      console.log('🚀 ~ msg', msg);
      this.$socketClient.sendObj(msg);
    }
  },

  watch: {
    msgType() {
      this.msgData = JSON.stringify(datas[this.msgType] || {});
    }
  },
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
