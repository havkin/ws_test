export const messages = {
  block_player: {
    type: "block_player",
    data: { UID: "25c8e098d0a163d78fb79f9ec6c8333eac48d360488aa01e7b343f938740d206" },
    isVisible: true,
  },
  lock_call: {
    type: "lock_call",
    data: {},
    isVisible: true,
  },
  unlock_call: {
    type: "unlock_call",
    data: {},
    isVisible: true,
  },
  get_room_full_data: {
    type: "get_room_full_data",
    data: {},
    isVisible: true,
  },
  room_check: {
    type: "room_check",
    data: { roomName: "kn8wehe0" },
    isVisible: true,
  },
  announcement_create: {
    type: "announcement_create",
    data: {
      playerUIDs: [
        "25c8e098d0a163d78fb79f9ec6c8333eac48d360488aa01e7b343f938740d206",
        "648cea44b0d747d233c7b2c061e63b08465e98d937601640a23221d6266ab201",
      ],
      message: "{{role.police_officer.players.[0].UID}}",
      toLog: false,
      actionGroupName: "Reveal",
      actionGroupActionId: 0,
      actionName: "first test",
    },
    isVisible: true,
  },
  role_confirm: {
    type: "role_confirm",
    data: {},
    isVisible: false,
  },
};
