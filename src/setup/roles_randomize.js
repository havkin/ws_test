import { gameSetup } from "./game_setup";

export const roles = {
  one: {
    type: "roles_randomize",
    data: {
      gameSetup,
      playersUIDs: [
        "25c8e098d0a163d78fb79f9ec6c8333eac48d360488aa01e7b343f938740d206",
      ],
      manualTblVal: [
        [0, 0, 3],
      ],
      manualRoles: [
        {
          _id: "609b56d799d8de1f983fd486",
          name: "Police Officer",
          teams: [
            {
              _id: "5b70a6fe4d489452cd19cf87",
              name: "Town",
              roles: [],
              color: "#ff0000",
              description: "The second-most quintessential Mafia team",
              winCondition: "Eliminate all the Mafia",
              position: 0,
            },
          ],
          imgId: "setups/vaar5kuxxqq8sgiqowkm",
          description: "Check peepz",
          modifiers: [],
          actionGroup: {},
          position: 0,
          count: 3,
        },
        // {
        //   "_id": "609b56d799d8de1f983fd487",
        //   "name": "Regular Mafia",
        //   "teams": [
        //     {
        //       "_id": "5b70a6d94d489452cd19cf86",
        //       "name": "Mafia",
        //       "roles": [
        //         {
        //           "_id": "5b7ebfb0dfdefc6b4cd632b6",
        //           "name": "Axe (Hungarian) (Hungarian) (1123)",
        //           "teams": [],
        //           "imgId": "setups/seiua3run45gv5jssfsd",
        //           "description": "Axe peepz at night",
        //           "modifiers": [],
        //           "actionGroup": {},
        //           "position": 0
        //         }
        //       ],
        //       "color": "#f23131",
        //       "description": "The quintessential Mafia team.",
        //       "winCondition": "Eliminate all other teams",
        //       "position": 0
        //     }
        //   ],
        //   "imgId": "setups/zdmkpprid6h7mune2zqh",
        //   "description": "Kill peepz at night",
        //   "modifiers": [],
        //   "actionGroup": {},
        //   "position": 1,
        //   "count": 1
        // }
      ],
    },
  },

  two: {
    type: "roles_randomize",
    data: {
      gameSetup,
      playersUIDs: [
        "25c8e098d0a163d78fb79f9ec6c8333eac48d360488aa01e7b343f938740d206",
        "63c40b7d1a8923b5538691514843e4149c458f1b1852e9e4744d1b8a310cd964",
      ],
      manualTblVal: [
        [0, 0, 3],
        // [
        //   0,
        //   0,
        //   1
        // ]
      ],
      manualRoles: [
        {
          _id: "609b56d799d8de1f983fd486",
          name: "Police Officer",
          teams: [
            {
              _id: "5b70a6fe4d489452cd19cf87",
              name: "Town",
              roles: [],
              color: "#ff0000",
              description: "The second-most quintessential Mafia team",
              winCondition: "Eliminate all the Mafia",
              position: 0,
            },
          ],
          imgId: "setups/vaar5kuxxqq8sgiqowkm",
          description: "Check peepz",
          modifiers: [],
          actionGroup: {},
          position: 0,
          count: 3,
        },
        // {
        //   "_id": "609b56d799d8de1f983fd487",
        //   "name": "Regular Mafia",
        //   "teams": [
        //     {
        //       "_id": "5b70a6d94d489452cd19cf86",
        //       "name": "Mafia",
        //       "roles": [
        //         {
        //           "_id": "5b7ebfb0dfdefc6b4cd632b6",
        //           "name": "Axe (Hungarian) (Hungarian) (1123)",
        //           "teams": [],
        //           "imgId": "setups/seiua3run45gv5jssfsd",
        //           "description": "Axe peepz at night",
        //           "modifiers": [],
        //           "actionGroup": {},
        //           "position": 0
        //         }
        //       ],
        //       "color": "#f23131",
        //       "description": "The quintessential Mafia team.",
        //       "winCondition": "Eliminate all other teams",
        //       "position": 0
        //     }
        //   ],
        //   "imgId": "setups/zdmkpprid6h7mune2zqh",
        //   "description": "Kill peepz at night",
        //   "modifiers": [],
        //   "actionGroup": {},
        //   "position": 1,
        //   "count": 1
        // }
      ],
    },
  },
};
