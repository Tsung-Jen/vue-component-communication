import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import FriendContact from "../src/components/FriendContact.vue";
import NewFriend from "../src/components/NewFriend.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("new-friend", NewFriend);

app.mount("#app");
