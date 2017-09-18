import {MockUser} from "./user";
import * as Discord from "discord.js";

export class MockMember {
  public id = "";
  public presence: Discord.Presence;
  public user: MockUser;
  constructor(id: string, username: string) {
    this.id = id;
    this.presence = new Discord.Presence({});
    this.user = new MockUser(this.id, username);
  }

  public MockSetPresence(presence: Discord.Presence) {
      this.presence = presence;
  }
}
