export const config = {
  moderator: {
    user_init: {"type":"user_init","data":{"id":"606e9129e00a6222bc87a3ee"}}, // user_initialized
    room_check: {"type":"room_check","data":{"roomName":"/"}}, // room_check_result
    player_data: {"type":"player_data","data":{"liarsToken":"eyJhbGciOiJIUzI1NiJ9.c29tYXhAa20ucnU.GMBL-NiO4uQ02OLK47wpT4KnY6ncXyWwU9mmMYggTZc","JID":"7285327c","bareJid":"7285327c-728b-4abc-84d9-3c1c9414b584@warp.liars.club/4f4e0e8d-6b18-49bc-a5ad-ff59daeaeb14","avatarLink":"profile_images/po2no9puyjv6pwtwrfpy","isModerator":false,"name":"Max Havkin","room":"kn8wehe0"}}, // room_updated room_full_data
    is_owner: {"type":"is_owner","data":{}},
    player_update_1: {"type":"player_update","data":{"name":"Max Havkin"}},
    player_update_2: {"type":"player_update","data":{"isModerator":true}},
    widgets_create_1: {"type":"widgets_create","data":[{"id":2,"type":"common","title":"Second timer","body":"Waiting for game..."},{"id":3,"type":"countdown","title":"Timer","body":{"remaining":0,"hide":true}}]},
    widgets_create_2: {"type":"widgets_create","data":[{"id":2,"type":"common","title":"Second timer","body":"Waiting for game..."},{"id":3,"type":"countdown","title":"Timer","body":{"remaining":0,"hide":true}}]},
    get_game_log: {"type":"get_game_log","data":{"type":"warp"}},
  },
  player1: {
    user_init: {"type":"user_init","data":{"id":"606ef928aa0f3d639c4d66fa"}},
    room_check: {"type":"room_check","data":{"roomName":"kn8wehe0"}},
    player_data: {"type":"player_data","data":{"liarsToken":"eyJhbGciOiJIUzI1NiJ9.dGVzdEB0ZXN0LnJ1.LrGehCEInbI8iSreI-VdgOpXSOsaDFLm6hBGSVOwf8E","JID":"b689089a","bareJid":"b689089a-a16d-4f90-bdce-4688d322570b@warp.liars.club/ddbb3978-fbd9-4b21-b532-827dc7432f02","avatarLink":"profile_images/ht3zilvfc806xccpqzna","isModerator":false,"name":"tester","room":"kn8wehe0"}},
    is_owner: {"type":"is_owner","data":{}},
    player_update_1: {"type":"player_update","data":{"name":"tester"}},
    get_game_log: {"type":"get_game_log","data":{"type":"warp"}},
  },
  player2: {
    user_init: {"type":"user_init","data":{"id":"6072d2071df68b548cbc507f"}},
    room_check: {"type":"room_check","data":{"roomName":"kn8wehe0"}},
    player_data: {"type":"player_data","data":{"liarsToken":"eyJhbGciOiJIUzI1NiJ9.c21xQGttLnJ1._yvpHp4loMGXeK6VCco_ZuSmr3zHyAGqvEHUDDdcSBw","JID":"cd8d53b7","bareJid":"cd8d53b7-fdf1-4165-9718-a3bbe0ca422c@warp.liars.club/53084c5f-6f60-4df5-87bc-4ff1d8ed032e","avatarLink":"profile_images/mfnoprcerapr5a3p2rke","isModerator":false,"name":"player2","room":"kn8wehe0"}},
  }
}