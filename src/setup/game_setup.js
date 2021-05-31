export const gameSetup = {
  "_id": "600662df92ceff0950ba83ef",
  "name": "0ForDev",
  "createdUser": "FrustyleGes",
  "imgId": "setups/zmpryterqyzquz7hksm1",
  "setupDescription": "For development",
  "difficulty": "Beginner",
  "minimumMember": "2",
  "maximumMember": "2",
  "playTime": "40",
  "alias": "",
  "alternateName": "",
  "narrationText": "",
  "repopulateCondition": "{{compare 1 \"==\" 1}}",
  "restoreCondition": "",
  "runCondition": "",
  "missingRules": "",
  "roleFrequencies": "",
  "voting": {
    "name": "voting1",
    "description": ""
  },
  "narrations": [],
  "intersections": [],
  "additionalRules": [],
  "modifiers": [],
  "actionGroups": [
    {
      "actionGroupName": "Reveal",
      "associatedRoles": [
        {
          "_id": "602e2e321d1d5155d2ada882",
          "name": "Police Officer",
          "frontendId": "51380f6a-976d-4dbd-8d6f-55a11d752c82",
          "position": "0",
          "imgId": "setups/vaar5kuxxqq8sgiqowkm",
          "teams": [
            {
              "_id": "5b70a6fe4d489452cd19cf87",
              "name": "Town",
              "roles": [],
              "color": "#ff0000",
              "description": "The second-most quintessential Mafia team",
              "winCondition": "Eliminate all the Mafia",
              "position": 0
            }
          ],
          "description": "Check peepz"
        },
        {
          "_id": "602e2e321d1d5155d2ada883",
          "name": "Regular Mafia",
          "frontendId": "89910886-bd80-4e32-9aad-6889f4ff7b15",
          "position": "1",
          "imgId": "setups/zdmkpprid6h7mune2zqh",
          "teams": [
            {
              "_id": "5b70a6d94d489452cd19cf86",
              "name": "Mafia",
              "roles": [
                {
                  "_id": "5b7ebfb0dfdefc6b4cd632b6",
                  "name": "Axe (Hungarian) (Hungarian) (1123)",
                  "teams": [],
                  "imgId": "setups/seiua3run45gv5jssfsd",
                  "description": "Axe peepz at night",
                  "modifiers": [],
                  "actionGroup": {},
                  "position": 0
                }
              ],
              "color": "#f23131",
              "description": "The quintessential Mafia team.",
              "winCondition": "Eliminate all other teams",
              "position": 0
            }
          ],
          "description": "Kill peepz at night"
        }
      ],
      "runCondition": "{{compare 1 \"==\" 1}}",
      "restoreCondition": "{{compare 1 \"==\" 1}}",
      "actions": [
        {
          "actionName": "first test",
          "actionType": "Make announcement",
          "frequency": "Every cycle",
          "fields": {
            "announcementText": "check boolean",
            "targets": [
              {
                "id": 0.5,
                "name": "Select All"
              }
            ],
            "logAnnouncement": false,
            "customizeHighlighting": true,
            "updateGlobalVariables": [
              {
                "id": "36830002-c843-4bc8-a915-1bf9db7ff970",
                "globalVariable": "flag",
                "value": "{{#if true}}false{{/if}}"
              }
            ]
          }
        },
        {
          "actionName": "subtract",
          "actionType": "Make announcement",
          "frequency": "Every cycle",
          "fields": {
            "announcementText": "not update status",
            "targets": [
              {
                "id": 0.5,
                "name": "Select All"
              }
            ],
            "logAnnouncement": false,
            "customizeHighlighting": false,
            "updateGlobalVariables": [
              {
                "id": "cd0ed229-b3fe-4ac8-94dc-737b37129b5d",
                "globalVariable": "status",
                "value": "update еукеу"
              }
            ]
          }
        },
        {
          "actionName": "y-n vote",
          "actionType": "Vote at a player vote",
          "frequency": "Every cycle",
          "actionAlias": "ynv",
          "fields": {
            "question": "sdkfjhskf ?",
            "actors": [
              {
                "id": 0.5,
                "name": "Select All"
              }
            ],
            "targets": [
              {
                "id": 1.5,
                "name": "Select All Players"
              }
            ],
            "isActionPrivate": false,
            "timeToVote": "20",
            "dontReveal": false,
            "isTerminationVoting": false,
            "delayBeforeResultsAreShown": "3",
            "timeToShowResults": "10",
            "endVoteWhenAllVoted": true,
            "voteSwitchingAndUnvoting": false,
            "allowSkipping": true,
            "isAnonymized": false,
            "customizeHighlighting": false,
            "updateGlobalVariables": [
              {
                "id": "5270cde6-db4b-4ed9-a61e-0695173c9f2f",
                "globalVariable": "num_yes_voters",
                "value": "{{action_groups.ynv.voters.[0].players.length}}"
              },
              {
                "id": "e064bd26-1815-4386-a3cd-dc5a786ac7db",
                "globalVariable": "num_no_voters",
                "value": "{{action_groups.ynv.voters.[1].players.length}}"
              }
            ]
          }
        },
        {
          "actionName": "Reveal",
          "actionType": "Reveal",
          "frequency": "Every cycle",
          "fields": {
            "actors": [
              {
                "_id": "602e2e321d1d5155d2ada882",
                "name": "Police Officer",
                "frontendId": "51380f6a-976d-4dbd-8d6f-55a11d752c82",
                "position": "0",
                "imgId": "setups/vaar5kuxxqq8sgiqowkm",
                "teams": [
                  {
                    "_id": "5b70a6fe4d489452cd19cf87",
                    "name": "Town",
                    "roles": [],
                    "color": "#ff0000",
                    "description": "The second-most quintessential Mafia team",
                    "winCondition": "Eliminate all the Mafia",
                    "position": 0
                  }
                ],
                "description": "Check peepz"
              }
            ],
            "targets": [
              {
                "_id": "602e2e321d1d5155d2ada883",
                "name": "Regular Mafia",
                "frontendId": "89910886-bd80-4e32-9aad-6889f4ff7b15",
                "position": "1",
                "imgId": "setups/zdmkpprid6h7mune2zqh",
                "teams": [
                  {
                    "_id": "5b70a6d94d489452cd19cf86",
                    "name": "Mafia",
                    "roles": [
                      {
                        "_id": "5b7ebfb0dfdefc6b4cd632b6",
                        "name": "Axe (Hungarian) (Hungarian) (1123)",
                        "teams": [],
                        "imgId": "setups/seiua3run45gv5jssfsd",
                        "description": "Axe peepz at night",
                        "modifiers": [],
                        "actionGroup": {},
                        "position": 0
                      }
                    ],
                    "color": "#f23131",
                    "description": "The quintessential Mafia team.",
                    "winCondition": "Eliminate all other teams",
                    "position": 0
                  }
                ],
                "description": "Kill peepz at night"
              }
            ],
            "revealRole": true,
            "revealTeam": true,
            "override": false,
            "customizeHighlighting": true,
            "customizers": [
              {
                "id": "84f3e06e-53a9-485d-a7fd-c716c5e42339",
                "listOfPlayers": [
                  {
                    "_id": "602e2e321d1d5155d2ada882",
                    "name": "Police Officer",
                    "frontendId": "51380f6a-976d-4dbd-8d6f-55a11d752c82",
                    "position": "0",
                    "imgId": "setups/vaar5kuxxqq8sgiqowkm",
                    "teams": [
                      {
                        "_id": "5b70a6fe4d489452cd19cf87",
                        "name": "Town",
                        "roles": [],
                        "color": "#ff0000",
                        "description": "The second-most quintessential Mafia team",
                        "winCondition": "Eliminate all the Mafia",
                        "position": 0
                      }
                    ],
                    "description": "Check peepz"
                  }
                ],
                "color": "#e60b0b",
                "duration": "30"
              },
              {
                "id": "f927a6d6-c1cf-40f0-811b-86d9181bdd63",
                "listOfPlayers": [
                  {
                    "_id": "602e2e321d1d5155d2ada883",
                    "name": "Regular Mafia",
                    "frontendId": "89910886-bd80-4e32-9aad-6889f4ff7b15",
                    "position": "1",
                    "imgId": "setups/zdmkpprid6h7mune2zqh",
                    "teams": [
                      {
                        "_id": "5b70a6d94d489452cd19cf86",
                        "name": "Mafia",
                        "roles": [
                          {
                            "_id": "5b7ebfb0dfdefc6b4cd632b6",
                            "name": "Axe (Hungarian) (Hungarian) (1123)",
                            "teams": [],
                            "imgId": "setups/seiua3run45gv5jssfsd",
                            "description": "Axe peepz at night",
                            "modifiers": [],
                            "actionGroup": {},
                            "position": 0
                          }
                        ],
                        "color": "#f23131",
                        "description": "The quintessential Mafia team.",
                        "winCondition": "Eliminate all other teams",
                        "position": 0
                      }
                    ],
                    "description": "Kill peepz at night"
                  }
                ],
                "color": "#2811ef",
                "duration": "30"
              }
            ]
          }
        }
      ]
    },
    {
      "actionGroupName": "Announce",
      "associatedRoles": [
        {
          "_id": "602e2e321d1d5155d2ada882",
          "name": "Police Officer",
          "frontendId": "51380f6a-976d-4dbd-8d6f-55a11d752c82",
          "position": "0",
          "imgId": "setups/vaar5kuxxqq8sgiqowkm",
          "teams": [
            {
              "_id": "5b70a6fe4d489452cd19cf87",
              "name": "Town",
              "roles": [],
              "color": "#ff0000",
              "description": "The second-most quintessential Mafia team",
              "winCondition": "Eliminate all the Mafia",
              "position": 0
            }
          ],
          "description": "Check peepz"
        },
        {
          "_id": "602e2e321d1d5155d2ada883",
          "name": "Regular Mafia",
          "frontendId": "89910886-bd80-4e32-9aad-6889f4ff7b15",
          "position": "1",
          "imgId": "setups/zdmkpprid6h7mune2zqh",
          "teams": [
            {
              "_id": "5b70a6d94d489452cd19cf86",
              "name": "Mafia",
              "roles": [
                {
                  "_id": "5b7ebfb0dfdefc6b4cd632b6",
                  "name": "Axe (Hungarian) (Hungarian) (1123)",
                  "teams": [],
                  "imgId": "setups/seiua3run45gv5jssfsd",
                  "description": "Axe peepz at night",
                  "modifiers": [],
                  "actionGroup": {},
                  "position": 0
                }
              ],
              "color": "#f23131",
              "description": "The quintessential Mafia team.",
              "winCondition": "Eliminate all other teams",
              "position": 0
            }
          ],
          "description": "Kill peepz at night"
        }
      ],
      "runCondition": "{{compare 1 \"==\" 1}}",
      "restoreCondition": "{{compare 1 \"==\" 1}}",
      "actions": [
        {
          "actionName": "Announce",
          "actionType": "Make announcement",
          "frequency": "Every cycle",
          "fields": {
            "announcementText": "Announcement 1",
            "targets": [
              {
                "_id": "602e2e321d1d5155d2ada882",
                "name": "Police Officer",
                "frontendId": "51380f6a-976d-4dbd-8d6f-55a11d752c82",
                "position": "0",
                "imgId": "setups/vaar5kuxxqq8sgiqowkm",
                "teams": [
                  {
                    "_id": "5b70a6fe4d489452cd19cf87",
                    "name": "Town",
                    "roles": [],
                    "color": "#ff0000",
                    "description": "The second-most quintessential Mafia team",
                    "winCondition": "Eliminate all the Mafia",
                    "position": 0
                  }
                ],
                "description": "Check peepz"
              }
            ],
            "logAnnouncement": false,
            "customizeHighlighting": true,
            "customizers": [
              {
                "id": "5d93cee1-5d5c-4163-bfb6-f2f79c032471",
                "listOfPlayers": [
                  {
                    "_id": "602e2e321d1d5155d2ada882",
                    "name": "Police Officer",
                    "frontendId": "51380f6a-976d-4dbd-8d6f-55a11d752c82",
                    "position": "0",
                    "imgId": "setups/vaar5kuxxqq8sgiqowkm",
                    "teams": [
                      {
                        "_id": "5b70a6fe4d489452cd19cf87",
                        "name": "Town",
                        "roles": [],
                        "color": "#ff0000",
                        "description": "The second-most quintessential Mafia team",
                        "winCondition": "Eliminate all the Mafia",
                        "position": 0
                      }
                    ],
                    "description": "Check peepz"
                  }
                ],
                "color": "#FFA500",
                "duration": "30"
              }
            ]
          }
        }
      ]
    },
    {
      "actionGroupName": "AnonVote",
      "associatedRoles": [
        {
          "_id": "602f4be656617d043b35db36",
          "name": "Police Officer",
          "frontendId": "45c29cdc-7736-4b78-b410-8d4a678b6ce3",
          "position": "0",
          "imgId": "setups/vaar5kuxxqq8sgiqowkm",
          "teams": [
            {
              "_id": "5b70a6fe4d489452cd19cf87",
              "name": "Town",
              "roles": [],
              "color": "#ff0000",
              "description": "The second-most quintessential Mafia team",
              "winCondition": "Eliminate all the Mafia",
              "position": 0
            }
          ],
          "description": "Check peepz"
        },
        {
          "_id": "602f4be656617d043b35db37",
          "name": "Regular Mafia",
          "frontendId": "b7c7e397-7234-4c7d-9e15-1ae5042f65ed",
          "position": "1",
          "imgId": "setups/zdmkpprid6h7mune2zqh",
          "teams": [
            {
              "_id": "5b70a6d94d489452cd19cf86",
              "name": "Mafia",
              "roles": [
                {
                  "_id": "5b7ebfb0dfdefc6b4cd632b6",
                  "name": "Axe (Hungarian) (Hungarian) (1123)",
                  "teams": [],
                  "imgId": "setups/seiua3run45gv5jssfsd",
                  "description": "Axe peepz at night",
                  "modifiers": [],
                  "actionGroup": {},
                  "position": 0
                }
              ],
              "color": "#f23131",
              "description": "The quintessential Mafia team.",
              "winCondition": "Eliminate all other teams",
              "position": 0
            }
          ],
          "description": "Kill peepz at night"
        }
      ],
      "runCondition": "{{compare 1 \"==\" 1}}",
      "restoreCondition": "{{compare 1 \"==\" 1}}",
      "actions": [
        {
          "actionName": "AnonVote",
          "actionType": "Vote at a player vote",
          "frequency": "Every cycle",
          "actionAlias": "AnonVote",
          "fields": {
            "question": "AnonVote",
            "actors": [
              {
                "id": 2.5,
                "name": "Select All Alive Players"
              }
            ],
            "targets": [
              {
                "id": 2.5,
                "name": "Select All Alive Players"
              }
            ],
            "isActionPrivate": false,
            "timeToVote": "200",
            "dontReveal": false,
            "isTerminationVoting": true,
            "sameVotePlayersCount": "2",
            "delayBeforeResultsAreShown": "0",
            "timeToShowResults": "5",
            "endVoteWhenAllVoted": true,
            "voteSwitchingAndUnvoting": false,
            "allowSkipping": false,
            "isAnonymized": true,
            "customizeHighlighting": false
          }
        }
      ]
    },
    {
      "actionGroupName": "HBS Vote",
      "associatedRoles": [
        {
          "_id": "602f809b56617d043b35db49",
          "name": "Police Officer",
          "frontendId": "a3585ce9-4bbd-4c63-996e-7d3611c975c3",
          "position": "0",
          "imgId": "setups/vaar5kuxxqq8sgiqowkm",
          "teams": [
            {
              "_id": "5b70a6fe4d489452cd19cf87",
              "name": "Town",
              "roles": [],
              "color": "#ff0000",
              "description": "The second-most quintessential Mafia team",
              "winCondition": "Eliminate all the Mafia",
              "position": 0
            }
          ],
          "description": "Check peepz"
        },
        {
          "_id": "602f809b56617d043b35db4a",
          "name": "Regular Mafia",
          "frontendId": "43118827-a435-4f02-8b48-7d021f3d2766",
          "position": "1",
          "imgId": "setups/zdmkpprid6h7mune2zqh",
          "teams": [
            {
              "_id": "5b70a6d94d489452cd19cf86",
              "name": "Mafia",
              "roles": [
                {
                  "_id": "5b7ebfb0dfdefc6b4cd632b6",
                  "name": "Axe (Hungarian) (Hungarian) (1123)",
                  "teams": [],
                  "imgId": "setups/seiua3run45gv5jssfsd",
                  "description": "Axe peepz at night",
                  "modifiers": [],
                  "actionGroup": {},
                  "position": 0
                }
              ],
              "color": "#f23131",
              "description": "The quintessential Mafia team.",
              "winCondition": "Eliminate all other teams",
              "position": 0
            }
          ],
          "description": "Kill peepz at night"
        }
      ],
      "runCondition": "{{compare 1 \"==\" 1}}",
      "restoreCondition": "{{compare 1 \"==\" 1}}",
      "actions": [
        {
          "actionName": "HBS VOTE",
          "actionType": "Vote at a player vote",
          "frequency": "Every cycle",
          "actionAlias": "HBS_vote",
          "fields": {
            "question": "HBS VOTE?",
            "actors": [
              {
                "_id": "602f809b56617d043b35db49",
                "name": "Police Officer",
                "frontendId": "a3585ce9-4bbd-4c63-996e-7d3611c975c3",
                "position": "0",
                "imgId": "setups/vaar5kuxxqq8sgiqowkm",
                "teams": [
                  {
                    "_id": "5b70a6fe4d489452cd19cf87",
                    "name": "Town",
                    "roles": [],
                    "color": "#ff0000",
                    "description": "The second-most quintessential Mafia team",
                    "winCondition": "Eliminate all the Mafia",
                    "position": 0
                  }
                ],
                "description": "Check peepz"
              },
              {
                "_id": "602f809b56617d043b35db4a",
                "name": "Regular Mafia",
                "frontendId": "43118827-a435-4f02-8b48-7d021f3d2766",
                "position": "1",
                "imgId": "setups/zdmkpprid6h7mune2zqh",
                "teams": [
                  {
                    "_id": "5b70a6d94d489452cd19cf86",
                    "name": "Mafia",
                    "roles": [
                      {
                        "_id": "5b7ebfb0dfdefc6b4cd632b6",
                        "name": "Axe (Hungarian) (Hungarian) (1123)",
                        "teams": [],
                        "imgId": "setups/seiua3run45gv5jssfsd",
                        "description": "Axe peepz at night",
                        "modifiers": [],
                        "actionGroup": {},
                        "position": 0
                      }
                    ],
                    "color": "#f23131",
                    "description": "The quintessential Mafia team.",
                    "winCondition": "Eliminate all other teams",
                    "position": 0
                  }
                ],
                "description": "Kill peepz at night"
              }
            ],
            "targets": [
              {
                "id": "{{UIDS global.alive_players}}",
                "name": "{{UIDS global.alive_players}}",
                "isCreatable": true
              }
            ],
            "isActionPrivate": false,
            "timeToVote": "300",
            "dontReveal": false,
            "isTerminationVoting": false,
            "delayBeforeResultsAreShown": "0",
            "timeToShowResults": "10",
            "endVoteWhenAllVoted": true,
            "voteSwitchingAndUnvoting": false,
            "allowSkipping": false,
            "isAnonymized": false,
            "customizeHighlighting": false
          }
        }
      ]
    }
  ],
  "tblVal": [
    [
      0,
      0,
      1
    ],
    [
      0,
      0,
      1
    ]
  ],
  "globalVariables": [
    {
      "id": "119b8cf1-c579-4d08-86d8-9ccf249c08aa",
      "name": "flag",
      "type": "Boolean",
      "initialValue": [
        {
          "id": "true",
          "label": "True",
          "value": true
        }
      ]
    },
    {
      "id": "8ad5de4c-d517-483c-a837-8745a7b0b2f3",
      "name": "num_yes_voters",
      "type": "List",
      "initialValue": null
    },
    {
      "id": "156699f0-2e11-4589-b4af-fe1f362253ca",
      "name": "num_no_voters",
      "type": "Integer",
      "initialValue": "0"
    },
    {
      "id": "97f550df-2c80-4dfa-96c2-e250fd8dfaf0",
      "name": "status",
      "type": "String",
      "initialValue": "start"
    }
  ],
  "gameType": "Mafia",
  "file": "",
  "roles": [
    {
      "_id": "609b56d799d8de1f983fd486",
      "name": "Police Officer",
      "teams": [
        {
          "_id": "5b70a6fe4d489452cd19cf87",
          "name": "Town",
          "roles": [],
          "color": "#ff0000",
          "description": "The second-most quintessential Mafia team",
          "winCondition": "Eliminate all the Mafia",
          "position": 0
        }
      ],
      "imgId": "setups/vaar5kuxxqq8sgiqowkm",
      "description": "Check peepz",
      "modifiers": [],
      "actionGroup": {},
      "position": 0
    },
    {
      "_id": "609b56d799d8de1f983fd487",
      "name": "Regular Mafia",
      "teams": [
        {
          "_id": "5b70a6d94d489452cd19cf86",
          "name": "Mafia",
          "roles": [
            {
              "_id": "5b7ebfb0dfdefc6b4cd632b6",
              "name": "Axe (Hungarian) (Hungarian) (1123)",
              "teams": [],
              "imgId": "setups/seiua3run45gv5jssfsd",
              "description": "Axe peepz at night",
              "modifiers": [],
              "actionGroup": {},
              "position": 0
            }
          ],
          "color": "#f23131",
          "description": "The quintessential Mafia team.",
          "winCondition": "Eliminate all other teams",
          "position": 0
        }
      ],
      "imgId": "setups/zdmkpprid6h7mune2zqh",
      "description": "Kill peepz at night",
      "modifiers": [],
      "actionGroup": {},
      "position": 1
    }
  ],
  "teams": [
    {
      "_id": "609b56d799d8de1f983fd484",
      "name": "Town",
      "roles": [],
      "color": "#ff0000",
      "description": "The second-most quintessential Mafia team",
      "winCondition": "Eliminate all the Mafia",
      "position": 0
    },
    {
      "_id": "609b56d799d8de1f983fd485",
      "name": "Mafia",
      "roles": [],
      "color": "#f23131",
      "description": "The quintessential Mafia team.",
      "winCondition": "Eliminate all other teams",
      "position": 0
    }
  ]
}