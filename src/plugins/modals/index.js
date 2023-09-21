import { reactive } from "vue";
import Modal from "./Modal.vue";


const _current = reactive({
  name: "",
  reject: null,
  resolve: null
}),
  api = {
    active() {
      return _current.name;
    },
    show(name) {
      _current.name = name;
      return new Promise((resolve, reject) => {
        _current.resolve = resolve;
        _current.reject = reject;
      });
    },
    accept() {
      _current.resolve();
      _current.name = "";
    },
    cancel() {
      _current.reject();
      _current.name = "";
    }
  },
  plugins = {
    install(App, options) {
      //Register global component
      App.component("Modal", Modal);
      //Provide api to all components
      App.provide("$modals", api)
    }
  };

export default plugins;